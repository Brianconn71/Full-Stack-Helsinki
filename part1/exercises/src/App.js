const Header = (props) => {
  
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}
const Part1 = (props) => {
  
  return (
    <>
      {props.part1} {props.exercise1}
    </>
  )
}

const Part2 = (props) => {
  
  return (
    <>
      {props.part2} {props.exercise2}
    </>
  )
}

const Part3 = (props) => {
  
  return (
    <>
      {props.part3} {props.exercise3}
    </>
  )
}
const Content = (props) => {
  
  return (
    <>
      <p>
        {props.part1}
      </p>
      <p>
        {props.part2}
      </p>
      <p>
        {props.part3}
      </p>
    </>
  )
}
const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.exercise1} + {props.exercise2} + {props.exercise3}</p>
    </>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercise1 = 10
  const exercise2 = 7
  const exercise3 = 14
  return(
    <div>
      <Header course={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3} />
    </div>
  )
}
export default App