import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)
const StatisticLine = ({text, val}) => (
  <tr>
    <td>{text}</td>
    <td>{val}</td>
  </tr>
)
const Stat = ({good, neutral, bad}) => {
  const sum = good+neutral+bad
  if (sum!==0){
      return (
        <table>
          <tbody>
            <StatisticLine text='good' val={good}/>
            <StatisticLine text='neutral' val={neutral}/>
            <StatisticLine text='bad' val={bad}/>
            <StatisticLine text='all' val={sum}/>
            <StatisticLine text='average' val={(good-bad)/sum}/>
            <StatisticLine text='positive' val={good/sum*100 + " %"}/>
          </tbody>
        </table>
      )
  } else {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good+1)} text='good'/>
      <Button handleClick={() => setNeutral(neutral+1)} text='neutral'/>
      <Button handleClick={() => setBad(bad+1)} text='bad'/>
      <h1>statistics</h1>
      <Stat good={good} bad={bad} neutral={neutral}/>
    </div>
  )
}

export default App