import { useState } from "react"
import Header from "./components/Header/Header"

function App() {
  // remetente atual
  const [currentSender, setCurrentSender] = useState("Me")

  // possíveis remetentes
  const [senders, setSenders] = useState([
    "Me", 
    "Fulano",
    "Beltrano",
    "Ciclano",
    "Astrodev"
  ])

  //mudar o remetente atual
  const onChangeSender = (e) => {
    setCurrentSender(e.target.value)
  }

  return (
    <div>
      <Header currentSender={currentSender} senders={senders} onChangeSender={onChangeSender}/>
      <h1>{currentSender}</h1>    
    </div>
    
  )
}

export default App
