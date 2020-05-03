import React from 'react'

const Anecdote = ({ anecdote, vote }) => {
  return (
    <div>
      <div>Content: {anecdote.content}</div>
      <div>Author: {anecdote.author}</div>
      <div>
        Votes: {anecdote.votes}
        <button onClick={() => vote(anecdote.id)}>Vote</button>
      </div>
      <a href={anecdote.info}>More info</a>
    </div>
  )
}

export default Anecdote
