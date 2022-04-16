import { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import UserTable from './UserTable';
import UserPosts from './UserPosts';


function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
  }, []) 

  const userRoutes = users.map(user => {
    return (
      <Route path={user.username} element={<UserPosts user={user} />} />
    )
  })
  
  return (
    <div className="App">
      <h1 className='main-header'>Ksense Users</h1>
      <UserTable users={users} />
      <Routes>
        {userRoutes}
      </Routes>
    </div>
  );
}

export default App;
