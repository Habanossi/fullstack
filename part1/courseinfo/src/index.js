import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    return (
        <div>
          <h1>{props.course}</h1>
        </div>
      )
}

const Part = (props) => {
    return (
        <div>
            <p>
                {props.part} {props.exercises}
            </p>
        </div>
    )
}

const Content = ({parts}) => {
    return (
        <div>
            <Part part={parts[0].name} exercises={parts[0].exercises}/>
            <Part part={parts[1].name} exercises={parts[1].exercises}/>
            <Part part={parts[2].name} exercises={parts[2].exercises}/>
            
        </div>
    )
}
const Total = (props) => {
    return (
        <div>
            <p>
                Number of exercises {props.exercises}
            </p>
        </div>
    )
}


const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }
    const total = course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total exercises={total}/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))