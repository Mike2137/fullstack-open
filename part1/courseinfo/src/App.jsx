const App = () => {
  const course = 'Half Stack application development'

  const parts = [
    { part: 'Fundamentals of React', exercises: 10 },
    { part: 'Using props to pass data', exercises: 7 },
    { part: 'State of a component', exercises: 14 }
  ]


  return (
    <div>
      <Header course={course} />
      <Content array={parts} />
      <Total array={parts} />
    </div>
  )
}


const Header = (props) => {
  return <h1>{props.course}</h1>

}

const Content = (props) => {
  return (
    <div>
      <Part array={props.array} index={0} />
      <Part array={props.array} index={1} />
      <Part array={props.array} index={2} />

    </div>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.array[props.index].part} {props.array[props.index].exercises}
    </p>
  )
}


const Total = (props) => {
  let total = 0

  for (let index = 0; index < props.array.length; index++) {
    total += props.array[index].exercises
  }
  return <p>Number of exercises: {total}</p>
}

export default App


