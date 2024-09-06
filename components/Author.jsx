import React, { useContext } from 'react'
import { context } from '../context/Context'


export default function Author() {
  const [isDark]=useContext(context)
  return (
    <div className={`author ${isDark}`}>Made with ❤️ by Rahul with the help of Anurag Bhaiya</div>
  )
}
