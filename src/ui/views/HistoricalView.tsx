import HistoricalGraph from "../components/historicalGraph";

export default function HistoricalView () {
  return (
    <>
    <h2>Historico</h2>
    <HistoricalGraph sensor="rpm" />
    </>
  )
}