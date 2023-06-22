const Header = (header) => {
  return (
    <h1>{header.course}</h1>
  )
}
const Part = (content) => {
  return (
    <p>{content.part} {content.exercise}</p>
  )
}
const Content = (content) => {
  return (
    <div>
      <Part part={content.parts[0].part} exercise={content.parts[0].exercises} />
      <Part part={content.parts[1].part} exercise={content.parts[1].exercises} />
      <Part part={content.parts[2].part} exercise={content.parts[2].exercises} />
    </div>
  )
}

const Total = (content) => {
  return (
    <div>
      <p>Number of exercises {
      content.parts[0].exercises+
      content.parts[1].exercises+
      content.parts[2].exercises}</p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      part: 'Fundamentals of React',
      exercises: 10
    },
    {
      part: 'Using props to pass data',
      exercises: 7
    },
    {
      part: 'State of a component',
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

export default App