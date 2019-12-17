
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNote = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    setPersons(persons.concat({name: newName}))
    console.log(persons)
    setNewName('')
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <form onSubmit={addNote}>
          <input value={newName}
                 onChange={handleNameChange}
          />
        <button type="submit">save</button>
      </form>  
        </div>
        <div>debug: {newName}</div>
      </form>
      <h2>Numbers</h2>
      {persons}
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'));

