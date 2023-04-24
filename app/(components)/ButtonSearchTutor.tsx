import Link from 'next/link'
import React from 'react'

const ButtonSearchTutor = () => {
  return (
    <Link href='/search-for-tutors' className="bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-white  hover:border-dark">
      Search For A Tutor
    </Link>
  )
}

export default ButtonSearchTutor