import { useState } from "react"
import { AppContainer } from "./GlobalStyle"
import { initialMessages } from "./assets/initialMessages"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"


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

  const [messages, setMessages] = useState(initialMessages)

  //mudar o remetente atual
  const onChangeSender = (e) => {
    setCurrentSender(e.target.value)
  }

  return (
    <>
      <AppContainer>
        <Header currentSender={currentSender} senders={senders} onChangeSender={onChangeSender}/>  
        <Main messages={messages}/> 
      </AppContainer>

      
    </>    
  )
}

export default App
