
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }, { name: 'Ada Lovelace'}
  ]) 
  const [ newName, setNewName ] = useState('')

  const addName = (event) => {
    event.preventDefault()
    console.log('button clicked', event.target)
    setPersons(persons.concat({name: newName}))
    //console.log(persons)
    setNewName('')
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const showNames = () =>
    persons.map(persons => <div key = {persons.name}> {persons.name} </div>)

  return (
    <div>
      <h2>Phonebook</h2>
        <div>
          <form onSubmit={addName}> name: 
            <input value={newName} onChange={handleNameChange}/>
            <button type="submit">add</button>
          </form>
          
        </div>
      <h2>Numbers</h2>
      {showNames()}
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'));

