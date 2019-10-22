import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => {
    return (
        <div>
            <button onClick={props.handle1Click}>{props.text1}</button>
            <button onClick={props.handle2Click}>{props.text2}</button>
        </div>
    )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState([0,0,0,0,0,0])
  const [most, setMost] = useState(0)

  const handleNextClick = () => {
    const index = Math.floor(Math.random() * 6)
    setSelected(index)
    console.log("vote index:", index)
  }

  const handleVoteClick = () => {
        const copy = [...votes]
        copy[selected] += 1
        setVote(copy)
        if(copy[selected] > copy[most]){
            setMost(selected)
        }
        console.log("votes:", copy)

    }


  return (
    <div>
        <h1>Anecdote of the day</h1>
        {props.anecdotes[selected]}
        <p>has {votes[selected]} votes</p>
        <Button handle2Click={handleNextClick} handle1Click={handleVoteClick} text1={'vote'} text2={'next anecdote'}/>
        <h1>Anecdote with most votes</h1>
        {props.anecdotes[most]}
        <p>has {votes[most]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
