// h1 "half stack application development"
// p part1 exercises 10
// p part2 exercises 7
// p part3 exercises 14
// p number of exercises 31

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

  const { name, parts } = course;




  return (
    <div>
      <Header name={name} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  )
}


const Header = ({ name }) => {
  return <h1>{name}</h1>
}

const Content = ({ parts }) => {
  const [first, second, third] = parts
  return (
    <div>
      <Part part={first} />
      <Part part={second} />
      <Part part={third} />
    </div>
  )
}

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>

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



