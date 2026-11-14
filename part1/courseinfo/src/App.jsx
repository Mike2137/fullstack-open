// h1 "half stack application development"
// p part1 exercises
// p part2 exercises
// p part3 exercises
// p number of exercises 

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <h1>{course}</h1>
      <p>{part1.name} {part1.exercises}</p>
      <p>{part2.name} {part2.exercises}</p>
      <p>{part3.name} {part3.exercises}</p>
      <p>Number of exercises: {part1.exercises + part2.exercises + part3.exercises}</p>
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



