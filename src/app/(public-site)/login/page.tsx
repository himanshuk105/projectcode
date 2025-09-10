'use client'

import { LoginPage, SignupPage } from '@/components/Main_Comp/Login'
import React, { useState } from 'react'

export default function SignIn() {
  const [login, setLogin] = useState(false)
  return <div className="">{login ? <LoginPage /> : <SignupPage />}</div>
}
