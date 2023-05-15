import { Container } from "./styles"
import { useEffect, useState } from "react"
import { ResponseBox } from "../components/ResponseBox"
import { SideInfo } from "../components/SideInfo"


function App() {
  const [text, setText] = useState()
  const [formalText, setFormalText] = useState(null)
  const [hasStarted, setHasStarted] = useState(false)
  const [disableButton, setDisableButton] = useState(false)

  const options = {
    method: "POST",
    body: JSON.stringify({
      message: text
    }),
    headers: {
      "Content-Type": "application/json"
    }
  }

  useEffect(() => {
    if(!text){
      setDisableButton(true)
    } else{
      setDisableButton(false)
    }
  }, [text])

  const getMessage = async () => {
    setDisableButton(true)
    setHasStarted(true)
    setFormalText(false)
    try{
      const response = await fetch("https://formalizator-api.onrender.com/completions", options)
      const data = await response.json()
      setFormalText(data.choices[0].message.content)
        
    } catch(error){
      console.error(error)
      setFormalText("Algo deu errado, tente novamente")
    }
    setDisableButton(false)
  }

  return (
    <Container>
      <h1 className="mobileTitle">Formalizador <br/>do Futuro</h1>
      <SideInfo />
      <div className="main">
        <ResponseBox formalText={formalText} hasStarted={hasStarted}/>
        <div className="inputBox">
          <textarea placeholder="digite o texto a ser formalizado" value={text} onChange={(e) => setText(e.target.value)}/>
          <button disabled={disableButton} onClick={getMessage}>Formalizar</button>
        </div>
      </div>

    </Container>
  )
}
export default App
