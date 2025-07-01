import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <div>
      <h1>First steps with React</h1>
      <h2> A component in React is a function that returns html!</h2>
      <marquee>JSX means JavaScript eXtension: a variant of javascript that merges html and javascript together</marquee>
      <ol>
        <li class="green">the index.html looks for stuff from main.jsx file</li>
        <li>main.jsx imports stuff from app.jsx and ...index.css</li>
        <li class="green">app.jsx imports from './App.css'</li>
        <li> there is a live update of webpage whenever we save App.jsx file!!! </li>
        <li class="green"> For a function be used it would need to be imported and exported: "export default xxx"</li>
      </ol>
      </div>
    </>
  )
}

export default App
