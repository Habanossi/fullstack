import React from 'react'

const Header = (props) => {
    return (
        <div>
          <h1>{props.header}</h1>
        </div>
      )
}

const Total = (props) => {
    return (
        <div>
            <b>
                total of {props.exercises} exercises 
            </b>
        </div>
    )
}

const Course = (props) => {
    const {parts} = props.course
    console.log(parts);

    const lines = () =>
        parts.map(parts => <p key={parts.id}>{parts.name} {parts.exercises}</p>)
    const sum = () => 
        parts.map(parts => parts.exercises)
            .reduce((exerciseSum, current) => exerciseSum + current, 0)

    return (
        <div>
            <Header header={props.course.name}/>
            {lines()}
            <Total exercises={sum()}/>
        </div>
    )
}

export default Course