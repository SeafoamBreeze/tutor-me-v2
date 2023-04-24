"use client"
import React, { useState } from 'react'
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';

const EmailVerification = () => {

  const [username, setUserName] = useState('');
  const [authenticationCode, setAuthenticationCode] = useState('');
  const router = useRouter();
  
  const handleRegisterConfirmation = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault()

    try {
      console.log(username);
      console.log(authenticationCode);
      await Auth.confirmSignUp(username, authenticationCode)
      router.push('/email-verification-sucess')
    } catch (err) {
      console.log(err)
    }

  }

  return (
    <div className="border border-red-600 border-md flex flex-col">
      <div>       
        <div className="border border-red-600 border-md">      
          <div className="col"><h1>Email Verification</h1></div>
        </div>
        <form onSubmit={handleRegisterConfirmation} className="form flex flex-col">
          <label htmlFor="username">Email</label>
          <input value={username} onChange={(event) => setUserName(event.target.value)} />
          <label htmlFor="authenticationCode">Authentication Code</label>
          <input value={authenticationCode} onChange={(event) => setAuthenticationCode(event.target.value)} />
          <button type="submit" className="button">Sign Up</button>
        </form>
      </div>   
    </div>
  )

}

export default EmailVerification