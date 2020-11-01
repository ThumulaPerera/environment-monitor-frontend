import React from 'react';
import LineChart from './LineChart';
import SensorDataPane from './SensorDataPane';

function App() {
  return (
    <div className="App">
      <SensorDataPane sensorName="temperatureSensor"/>
      <SensorDataPane sensorName="humiditySensor"/>
    </div>
  );
}

export default App;
