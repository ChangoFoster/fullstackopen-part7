import React from 'react'
import { useField } from '../hooks'

const CreateNew = (props) => {
  const {reset: resetContent, ...content} = useField('text')
  const {reset: resetAuthor, ...author} = useField('text')
  const {reset: resetInfo, ...info} = useField('text')

  const handleSubmit = (event) => {
    event.preventDefault()
    const votes = 0
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes
    })
  }

  const resetForm = (event) => {
    event.preventDefault()
    resetContent()
    resetAuthor()
    resetInfo()
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content: <input {...content}/>
        </div>
        <div>
          author: <input {...author} />
        </div>
        <div>
          url for more info: <input {...info} />
        </div>
        <button>create</button>
        <button
          name="reset"
          onClick={(event) => {resetForm(event)}}
          type="reset"
        >
          Reset
        </button>
      </form>
    </div>
  )
}

export default CreateNew
