import HistoricalGraph from "../components/historicalGraph";

// const TEST_DATA: SensorValues = [
//   { 'rpm': 15, 'sonda_lambda': 15, 'engine_temp': 15 },
//   { 'rpm': 7, 'sonda_lambda': 7, 'engine_temp': 7 },
//   { 'rpm': 10, 'sonda_lambda': 10, 'engine_temp': 10 },
//   { 'rpm': 23, 'sonda_lambda': 23, 'engine_temp': 23 },
//   { 'rpm': 12, 'sonda_lambda': 12, 'engine_temp': 12 },
//   { 'rpm': 17, 'sonda_lambda': 17, 'engine_temp': 17 },
//   { 'rpm': 30, 'sonda_lambda': 30, 'engine_temp': 30 },
//   { 'rpm': 26, 'sonda_lambda': 26, 'engine_temp': 26 },
// ]

export default function HistoricalView () {
  return (
    <div style={{width: '500px'}} >
    <h2>Historico</h2>
    <HistoricalGraph sensor='temp_ref' unit="°C" lineColor="#929" fillColor="#505" />
    </div>
  )
}