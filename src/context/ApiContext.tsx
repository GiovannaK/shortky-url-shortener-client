import React, { useState } from 'react'
import { createContext } from "react";
import { toast } from 'react-toastify';
import { InputProps } from '../components/Form';
import { api } from '../services/api';

export const ApiContext = createContext({})

export const ApiProvider = ({children}: any) => {
  const [link, setLink] = useState({})
  const [loading, setLoading] = useState(false)

  const sendLink = async (value: InputProps) => {
    try {
      setLoading(true)
      const res = await api.post('/shorten', {originURL: value.originURL})
      setLoading(false)
      setLink(res.data)
    } catch (error) {
      toast.error('Não foi possível enviar Link')
    }
  }

  return (
    <ApiContext.Provider value={{link, sendLink, loading}}>
      {children}
    </ApiContext.Provider>
  )
}

