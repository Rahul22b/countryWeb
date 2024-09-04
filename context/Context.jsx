import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'

export function Theme({children}){
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))

  return (
    <context.Provider value={[isDark,setIsDark]}>
   {children}
    </context.Provider>)
}

  export const context=createContext()



