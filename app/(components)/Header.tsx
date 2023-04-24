"use client"
import { Auth } from 'aws-amplify'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'
import { AuthContext } from '../providers'

const Header = () => {

  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
  const router = useRouter()

  console.log("From header isAuthenticated: " + isAuthenticated)

  const handleSignOut = async () => {
    try {
      await Auth.signOut()
      setIsAuthenticated(false)      
      router.push('/')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="py-4 border-b-2 flex flex-row font-semibold">
      <div className="px-2 border-b-2 border-transparent hover:border-b-black">
        <Link href='/'>TutorMe</Link>
      </div>
      <div className="px-2 flex flex-row ml-auto">
        { isAuthenticated && <button onClick={ handleSignOut } className="px-2 border-b-2 border-transparent hover:border-b-black">Sign Out</button> }
        { !isAuthenticated && <Link href='/sign-in' className="px-2 border-b-2 border-transparent hover:border-b-black">Sign In</Link> }
        { !isAuthenticated && <Link href='/sign-up' className="px-2 border-b-2 border-transparent hover:border-b-black">Sign Up</Link> }
      </div>      
    </div>
  )
}

export default Header