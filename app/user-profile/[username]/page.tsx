"use client"
import { Auth } from 'aws-amplify'
import { useEffect, useState } from 'react'
import Image from 'next/image';
import bgImage from '../../../public/t1.png'
import ButtonSearchTutor from '../../(components)/ButtonSearchTutor'

const UserProfile = () => {

  const [user, setUser] = useState(null)

  useEffect(() => { 
    Auth.currentAuthenticatedUser()
      .then(user => { 
        console.log("User: ", user)
        setUser(user)
      })
      .catch(() => { 
        setUser(null)
      })
  }, [])

  
  return (
    <div>
      <div className="w-full h-[750px] relative">
        <Image src={bgImage} alt="Students receiving their result" className="object-cover w-full h-full absolute" />
        <div className="flex flex-col w-full absolute">
          <div className="p-4 text-2xl font-semibold ml-auto">
            {user && <h1 className="text-light">Welcome, {user.attributes["custom:full_name"]}</h1>}
          </div>
          <div className="mx-auto py-48 px-16 items-center justify-center">
            <h2 className="py-10 text-4xl text-light font-semibold">Find Your Ideal Tutor Today!</h2>
            <div className="flex justify-center">
              <ButtonSearchTutor />
            </div>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default UserProfile