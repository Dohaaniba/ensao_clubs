import React from 'react'
import Login from './Login'

import User from './User/User'


function App() {
  const [currentPage, setCurrentPage] = React.useState('Login');

 

  return (
    <div>
    {currentPage === 'Login' && <Login onSwitchPage={() => setCurrentPage('User')} />}
    {currentPage === 'User' && <User onSwitchPage={() => setCurrentPage('Login')} />}
  </div>
  )
}

export default App
