import { useState } from 'react'
import './App.css'

function App() {
  const [colorHex, setColorHex] = useState("#ffffff")
  const [colorHexStyle, setColorHexStyle] = useState("#ffffff")
  const [rgbOutput, setRgbOutput] = useState("rgb(255, 255, 255)")

  const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    const val = event.target.value;
    setColorHex(val);
    if (val.length > 6){
      const result = hexToRgb(val);
      if (typeof(result) === 'string'){
        setRgbOutput(result);
        setColorHexStyle("red");
      } else {
        setRgbOutput(`rgb(${result.r}, ${result.g}, ${result.b})`);
        setColorHexStyle(val);
      }      
    }
  }

  function hexToRgb(hex : string) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : "Ошибка!";
  }

  return (
    <>
      <div className="bg" style={{backgroundColor : colorHexStyle}}>
        <form>
          <input type="text" className="inp" value={colorHex} onChange={handleChange} />
        </form>
        <div className="rgb_output">{rgbOutput}</div>
      </div>
    </>
  )
}

export default App
