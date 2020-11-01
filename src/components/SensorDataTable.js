import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Table, Button, Segment } from 'semantic-ui-react';

const initialLength = 5;


function SensorDataTable({ sensorName, color }) {

    const [length, setLength] = useState(initialLength);

    useFirestoreConnect([
        { collection: 'NODEMCU' } 
      ])
    const data = useSelector((state) => state.firestore.ordered.NODEMCU);

    if(!data || data == undefined){
        return (
            <Segment 
                loading 
                basic
                padded="very"
            />
        )
    }

    const expand = () => {
        setLength(Math.min(length + initialLength, data.length));
    }

    const collapse = () => {
        setLength(initialLength);
    }

    const tableLength = Math.min(length, data.length)

    const timeData = data.map(record => record['dateTime']).reverse().slice(0, tableLength);
    const sensorData = data.map(record => record[sensorName]).reverse().slice(0, tableLength);
    console.log(timeData);
    console.log(sensorData);

    return (
        <div>
            <Table celled color={color}>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Time</Table.HeaderCell>
                        <Table.HeaderCell>Number of Readings</Table.HeaderCell>
                        <Table.HeaderCell>Average</Table.HeaderCell>
                        <Table.HeaderCell>Standard Deviation</Table.HeaderCell>                    
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {
                    timeData.map((time, index) => (
                        <Table.Row>
                            <Table.Cell>{time}</Table.Cell>
                            <Table.Cell>{sensorData[index]['numberOfReadings']}</Table.Cell>
                            <Table.Cell>{sensorData[index]['average']}</Table.Cell>
                            <Table.Cell>{sensorData[index]['standardDeviation']}</Table.Cell>
                        </Table.Row>
                    ))
                }
                </Table.Body>
            </Table>
            <Button onClick={expand} disabled={length == data.length}>
                expand
            </Button>
            <Button onClick={collapse} disabled={length == initialLength}>
                collapse
            </Button>
        </div>
    )
}

export default SensorDataTable;