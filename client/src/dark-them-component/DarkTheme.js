import React, { useState } from 'react'
import './darktheme.css'
export default function DarkTheme() {
    const [darkMode,setDarkMode] = useState(false)

  return (
    <div className={`${darkMode ? 'dark-mode' : " " }`}>
        <h2>Apply DarkTheme</h2>
        <button onClick={()=>setDarkMode(!darkMode)}>change theme</button>
    </div>
  )
}
