
import React, { useState, useContext, createContext, useEffect } from 'react'
// import axiosInstance from '../helpers/axiosInstance'


const apiContext = createContext()


export const useGlobalContext = () => useContext(apiContext)


export default function GlobalContextProvider({children}) {

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [profile, setProfile] = useState(null)
  const [showForm, setShowForm] = useState(false)
    
  useEffect(() => {
    setLoading(false)
    setError(null)
    setProfile(null)
  }, [])


  return (
    <apiContext.Provider value={{ loading, error, profile, showForm, setShowForm }}>
      {children}
    </apiContext.Provider>
  )
}
