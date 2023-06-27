import { useState } from 'react'

const Button = ({handleClick, text}) => (
  <button onClick={handleClick}>{text}</button>
)
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const setVoteFunc = () => {
    const copy = [...vote]
    copy[selected] += 1
    setVote(copy)
  }

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))
  const bestIndex = vote.indexOf(Math.max(...vote))

  console.log(selected, vote)
  return (
    <div>
      <h1>Anecdotes of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} votes</p>
      <Button handleClick={setVoteFunc} text='vote'/>
      <Button handleClick={() => setSelected(Math.floor(Math.random()*anecdotes.length))} text='next anecdote'/>
      <h1>Anecdotes with most votes</h1>
      <p>{anecdotes[bestIndex]}</p>
      <p>has {vote[bestIndex]} votes</p>
    </div>
  )
}

export default App