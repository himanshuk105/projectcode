'use client'

import { LoginPage, SignupPage } from '@/components/Main_Comp/Login'
import React, { useState } from 'react'

export interface loginProps {
  handlePageChange: (type: string) => void
}

export default function SignIn() {
  const [login, setLogin] = useState('login')
  const handlePageChange = (type: string) => {
    setLogin(type)
  }
  return (
    <div className="">
      {login == 'login' ? (
        <LoginPage handlePageChange={handlePageChange} />
      ) : (
        <SignupPage handlePageChange={handlePageChange} />
      )}
    </div>
  )
}
