"use client"
import React, { useContext, useState } from 'react'
import { Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation';
import { AuthContext } from '../providers';

const SignIn = () => {

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault()

    try {
      console.log(username);
      console.log(password);    

      const user = await Auth.signIn(username, password)
      setIsAuthenticated(true)
      router.push(`/user-profile/${user.username}`)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="p-16 flex flex-col">
      <div className="mx-auto border-4 border-gray-600 rounded-lg w-96">   
        <div className="p-4">       
          <div className="py-4 text-4xl border-b-2 font-bold flex justify-center">
            <div className="col"><h1>Sign In!</h1></div>
          </div>
          <form onSubmit={handleLogin} className="form flex flex-col">
            <label htmlFor="username" className="py-2 font-semibold">Email</label>
            <input value={username} onChange={(event) => setUserName(event.target.value)} className="border-2 border-gray-400 rounded-md"/>
            <label htmlFor="password" className="py-2 font-semibold">Password</label>
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="border-2 border-gray-400 rounded-md"/>
            <div className="py-6 flex justify-center">
              <button className="bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark">
                  Sign In
              </button>
            </div>
          </form>
        </div>     
      </div>
    </div>
  )

}

export default SignIn