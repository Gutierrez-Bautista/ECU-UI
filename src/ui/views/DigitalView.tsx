import LightsGraph from "../components/DigitalGraphs/Lights";
import TempGraph from "../components/DigitalGraphs/Temp";

export default function DigitalView () {
  return (
    <div style={{width: '500px'}} >
      <h2>Digital</h2>
      <div style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'end'
      }}>
        <TempGraph sensor='temp_admin' label="Admision" />
        <LightsGraph quantity={4} label="somthing" color="#f00" size="12px" direction="to-right" />
      </div>
    </div>
  )
}