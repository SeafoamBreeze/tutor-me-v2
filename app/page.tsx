import Image from 'next/image'
import bgImage from '../public/t2.png'
import ButtonSignUp from './(components)/ButtonSignUp'

export default function Home() {
  return ( 
    <div className="p-2 flex flex-col">
      <div className="flex flex-col lg:flex-row w-full ">
        <div className="w-1/2 px-2">
          <h2 className="py-10 text-4xl font-bold flex content-center">
            Don't Let Tough Subjects Hold You Back!
          </h2>
          <p className="pb-2">
            Join our tuition centre today and discover the many benefits of our experienced and dedicated team of tutors who provide personalized attention and customized study plans to help you excel in your studies. 
          </p>
          <p className="pb-2">
          With a range of teaching methods and resources, we make learning enjoyable and effective, ensuring that you are fully prepared for your exams. Plus, we offer a range of extracurricular activities to help you develop important life skills and broaden your horizons, providing a well-rounded education that prepares you for success in all areas of life. Sign up today!
          </p>
          <div className="py-6 flex justify-center">
            <ButtonSignUp />
          </div>
        </div>
        <div className="w-1/2 flex justify-center relative object-cover">
          <Image src={bgImage} alt="Students receiving their result"/>
        </div> 
      </div>

    </div>
  )
}
