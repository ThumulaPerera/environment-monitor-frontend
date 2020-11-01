import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

const initData = {
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
        {
            label: "Videos Made",
            backgroundColor: "rgba(255, 0, 255, 0.75)",
            data: [4, 5, 1, 10, 32]
        },
        {
            label: "Subs",
            backgroundColor: "rgba(0, 255, 0, 0.75)",
            data: [14, 15, 21, 0, 12]
        }
    ]
}

function LineChart() {
    const [data, setData] = useState(initData);

    return (
        <div>
            <Line
                options={
                    {
                        responsive: true
                    }
                }
                data={data}
            />                    
        </div>
    )
}

export default LineChart;
