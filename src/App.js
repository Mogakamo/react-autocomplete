import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [text, setText] = useState('')
  const [suggestions, setSuggestions] = useState([])
  useEffect(() => {
    const loadUsers = async() => {
      const response = await axios.get('https://reqres.in/api/users')
      console.log(response)
      setUsers(response.data.data)
    }

    loadUsers()
  }, [])

  const onChangeHandler = (text) => {
    let matches = []
    if(text.length > 0) {
      matches = users.filter(user=> {
        const regex = new RegExp(`${text}`, "gi")
        return user.email.match(regex)
      })
    }

    console.log('matches', matches)
    setSuggestions(matches)
    setText(text)
  }

  return (
    <div className="App">
      
      <input type="text"
            className="col-md-6 input"
            style={{marginTop: 10}} 
            onChange={e=>onChangeHandler(e.target.value)}
      />
    </div>
  );
}

export default App;
