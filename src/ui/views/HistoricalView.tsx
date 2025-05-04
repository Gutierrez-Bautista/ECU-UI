import HistoricalGraph from "../components/historicalGraph";

const TEST_DATA = [
  { 'rpm': 15, 'lambda': 15, 'engine-temp': 15 },
  { 'rpm': 7, 'lambda': 7, 'engine-temp': 7 },
  { 'rpm': 10, 'lambda': 10, 'engine-temp': 10 },
  { 'rpm': 23, 'lambda': 23, 'engine-temp': 23 },
  { 'rpm': 12, 'lambda': 12, 'engine-temp': 12 },
  { 'rpm': 17, 'lambda': 17, 'engine-temp': 17 },
  { 'rpm': 30, 'lambda': 30, 'engine-temp': 30 },
  { 'rpm': 26, 'lambda': 26, 'engine-temp': 26 },
]

export default function HistoricalView () {
  return (
    <div style={{width: '500px'}} >
    <h2>Historico</h2>
    <HistoricalGraph sensor="rpm" data={TEST_DATA} unit="rpm" />
    </div>
  )
}