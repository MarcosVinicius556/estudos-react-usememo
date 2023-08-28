import { useState } from 'react'
import './App.css'
import { Header } from './Header';


function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSave(e){
    e.preventDefault();
  }


  return (
    <div className="container">
      <h1>React</h1>
      <Header name={name}/>

      <form className="form" onSubmit={handleSave}>
        <input
          type="text"
          value={name}
          onChange={ (event) => setName(event.target.value) }
          placeholder="Digite seu nome..."
          className="input"
        />

        <input
          type="text"
          value={email}
          onChange={ (event) => setEmail(event.target.value) }
          placeholder="Digite seu email..."
          className="input"
        />

        <button className="button" type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default App
