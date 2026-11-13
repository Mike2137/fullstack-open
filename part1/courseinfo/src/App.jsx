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
      {props.array.map(part =>
        <p>{part.part} {part.exercises}</p>
      )}
    </div>
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


