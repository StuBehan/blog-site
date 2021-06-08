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

  const getUsernameRepos = async () => {
    const response = await octokit.request("GET /users/{username}/repos", {
    username: username
    })
    return response
  }
  
  const getFavLang = (element) => {
    element.preventDefault()
    
    getUsernameRepos()
  } 

  return(
    <div>
      <form id='githublang-form' className='lang-form'>
        <label for='username'>Username</label><br></br>
        <input type='text' 
          name='username'
          onChange={element => onChange(element)}  
        />
        <button onClick={element => getFavLang(element)}>Find the Favourite!</button>
      </form>
    </div>
  )

}

export default GitHubLang;