import React from 'react';
import { Segment, Header } from 'semantic-ui-react';

import SensorDataTable from './SensorDataTable';

const colorMapping = {
    humiditySensor : "blue",
    temperatureSensor: "red",
}

const sensorNames = {
    humiditySensor : "Humidity Sensor",
    temperatureSensor: "Temperature Sensor",
}

function SensorDataPane({ sensorName }) {
    return (
        <Segment 
            basic 
            padded="very"
        >
            <Header 
                color={colorMapping[sensorName]}
            >
                {sensorNames[sensorName]}
            </Header>
            <SensorDataTable 
                sensorName={sensorName}
                color={colorMapping[sensorName]}
            />    
        </Segment>
    )
}

export default SensorDataPane
