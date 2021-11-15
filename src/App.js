import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'

function App() {
  const [user, setUsers] = useState([])
  const [text, setText] = useState('')
  useEffect(() => {
    const loadUsers = async() => {
      const response = await axios.get('https://reqres.in/api/users')
      console.log(response)
      setUsers(response.data.data)
    }

    loadUsers()
  }, [])

  const onChangeHandler = (text) => {
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
