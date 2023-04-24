"use client"
import { useState } from 'react'
import { useRouter } from 'next/navigation';
import { Auth } from 'aws-amplify'

const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [gender, setGender] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const router = useRouter();

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {

    event.preventDefault()

    try {
      console.log(email, password, fullName, gender, dateOfBirth)

      const { user } = await Auth.signUp({
        username: email,
        password: password,
        attributes: {
          email: email,
          "custom:full_name": fullName,
          "custom:gender": gender,
          "custom:date_of_birth": dateOfBirth
        },
      });

      router.push('/email-verification')
      
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="p-16 mx-auto flex flex-col">
      <div className="mx-auto border-4 border-gray-600 rounded-lg w-96">   
        <div className="p-4">
          <div className="py-4 text-4xl border-b-2 font-bold flex justify-center">
            Sign Up!
          </div>
      
          <form onSubmit={handleRegister} className="form flex flex-col p-4">
            <label htmlFor="email" className="py-2 font-semibold">Email Address</label>
            <input value={email} onChange={(event) => setEmail(event.target.value)} className="border-2 border-gray-400 rounded-md"/>

            {/* TODO: To implement min 8 characters for password, edit in cognito for more validations */}
            <label htmlFor="password" className="py-2 font-semibold">Password</label>
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" className="border-2 border-gray-400 rounded-md"/>

            <label htmlFor="fullName" className="py-2 font-semibold">Full Name</label>
            <input value={fullName} onChange={(event) => setFullName(event.target.value)} className="border-2 border-gray-400 rounded-md"/>

            <label htmlFor="gender" className="py-2 font-semibold">Gender</label>
            <input value={gender} onChange={(event) => setGender(event.target.value)} className="border-2 border-gray-400 rounded-md" />
            
            <label htmlFor="dateOfBirth" className="py-2 font-semibold">Date of Birth</label>
            <input value={dateOfBirth} onChange={(event) => setDateOfBirth(event.target.value)} className="border-2 border-gray-400 rounded-md" />
            
            <div className="py-6 flex justify-center">
              <button className="bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-transparent hover:border-dark">
                Sign Up
              </button>
            </div>
          </form>
        </div>

      </div>   
    </div>
  )

}

export default SignUp