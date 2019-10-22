import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
      <div>
        <h1>{props.text}</h1>
      </div>
    )
}

const Statistic = (props) => {
  return (
    
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
          <td>{props.extra}</td> 
        </tr>
    )
}

const Statistics = (props) => {
  if(props.clicks === 0){
    return <div>No feedback given</div>
  }
  else{
    return (
      
        <table>
          <tbody>
          <Statistic text = 'good' value = {props.good}/>

          <Statistic text = 'neutral' value = {props.neutral}/>

          <Statistic text = 'bad' value = {props.bad}/>

          <Statistic text = 'all' value = {props.clicks}/>

          <Statistic text = 'average' value = {props.score / props.clicks}/>

          <Statistic text = 'positive' value = {100 * props.good / props.clicks} extra = '%'/>
        </tbody>
      </table>
      
    )
  }
}

const Button = (props) => {
  return (
      <div>
        <button onClick={props.handleGoodClick}> 
        good
      </button>
        <button onClick={props.handleNeutralClick}> 
        neutral
      </button>
        <button onClick={props.handleBadClick}> 
        bad
      </button>
      </div>
    )
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [clicks, setAll] = useState(0)
  const [score, setScore] = useState(0)

  const handleGoodClick = () => {
    setGood(good +1)
    setAll(clicks +1)
    setScore(score +1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral +1)
    setAll(clicks +1)
  }

  const handleBadClick = () => {
    setBad(bad +1)
    setAll(clicks +1)
    setScore(score -1)
  }

  return (
    <div>
      <Header text = {'give feedback'}/>

      <Button handleGoodClick={handleGoodClick} handleNeutralClick={handleNeutralClick} handleBadClick = {handleBadClick}/>

      <Header text = {'statistics'}/>

      <Statistics good = {good} bad = {bad} neutral = {neutral} clicks = {clicks} score = {score}/>
      
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)