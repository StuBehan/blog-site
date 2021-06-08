import { useState, useEffect } from 'react'
const { Octokit } = require('@octokit/rest')

const GitHubLang = () => {
  const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_API_TOKEN })
  const [username, setUsername] = useState({
    username: ''
  })

  const onChange = (element) => {
    setUsername((prevState) => ({...prevState, [element.target.name]: element.target.value}))
    console.log(username)
  }

  return(
    <div>
      <form id='githublang-form' className='lang-form'>
        <label for='username'>Username</label><br></br>
        <input type='text' 
          name='username'
          onChange={element => onChange(element)}  
        />
      </form>
    </div>
  )

}

export default GitHubLang;