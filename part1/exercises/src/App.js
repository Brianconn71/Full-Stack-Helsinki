const Part1 = (props) => {
  
  return (
    <>
      {props.part1} {props.exercise1}
    </>
  )
}

const Part2 = (props) => {
  const part2 = 'Using props to pass data'
  const exercise2 = 7
  return (
    <>
      {part2} {exercise2}
    </>
  )
}

const Part3 = (props) => {
  const part3 = 'State of a component'
  const exercise3 = 14
  return (
    <>
      {part3} {exercise3}
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercise1 = 10
  return(
    <div>
      <h1>{course}</h1>
      <p>
        <Part1 part1={part1} exercise1={exercise1}/>
      </p>
      <p>
        <Part2 />
      </p>
      <p>
        <Part3 />
      </p>
      <p>Number of exercises {}</p>
    </div>
  )
}
export default App