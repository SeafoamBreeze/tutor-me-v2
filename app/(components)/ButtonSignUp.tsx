import React from 'react'
import Link from 'next/link'

const ButtonSignUp = () => {
  return (
    <Link href='/sign-up' className="bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark">
      SIGN UP
    </Link>
  )
}

export default ButtonSignUp