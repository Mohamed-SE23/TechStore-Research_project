import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthWrapper } from './auth/AuthWrapper'

// import { Hero } from './components'

const App = () => {

  return (
    <Router>
      <AuthWrapper />
    </Router>
  )
}

export default App;
/*       <main>
<div className='w-full border-b-2 flex justify-between items-center py-4 px-8 border-pink-600 '>
<h1 
className='text-2xl font-bold'>Tech<span className='text-[#ff0000]'>Store</span></h1>
<div>
  <ul className='flex space-x-6'>
    <li>contact</li>
    <li>about us</li>
    <li>Sign in</li>
    <li>Register</li>
  </ul>
</div>
</div>
</main>  */