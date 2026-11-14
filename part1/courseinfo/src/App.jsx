// h1 "half stack application development"
// p part1 exercises 10
// p part2 exercises 7
// p part3 exercises 14
// p number of exercises 31

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
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

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}


const Header = (props) => {
  return <h1>{props.course}</h1>

}

const Content = ({ parts }) => {
  return (
    <div>
      <Part array={parts[0]} />
      <Part array={parts[1]} />
      <Part array={parts[2]} />
    </div>
  )
}

const Part = ({ array }) => {
  return (
    <p>
      {array.name} {array.exercises}
    </p>
  )
}


const Total = ({ parts }) => {
  let total = 0

  for (let i = 0; i < parts.length; i++) {
    total += parts[i].exercises
  }
  return <p>Number of exercises {total}</p>
}

export default App



