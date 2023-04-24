"use client"
import React, { useState } from 'react'

const searchForTutors = () => {
  
  const [subject, setSubject] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`https://he5jqf8c4i.execute-api.ap-southeast-1.amazonaws.com/test/tutors?subject=${subject}`)
      const data = await response.json();
      console.log(data);
      return data
    } catch (error) {
      console.error(error);
    }

  };

  return (
    <div className="px-10 py-48 font-semibold text-2xl flex justify-center">
      <form onSubmit={handleSubmit}>
        <div className="py-4 pb-4 flex flex-row">
          <label htmlFor="subject">I am looking for a</label>
          <select id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} className="text-gray-400 border-b-2 border-gray-400 bg-transparent mx-2">
            <option value="" disabled selected>Subject</option>
            <option value="Art">Art</option>
            <option value="Biology">Biology</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Computing">Computing</option>
            <option value="Economics">Economics</option>
            <option value="General Paper">General Paper</option>
            <option value="Geography">Geography</option>
            <option value="History">History</option>
            <option value="Literature">Literature</option>
            <option value="Mathematics">Mathematics</option>
            <option value="Physics">Physics</option>
          </select>
          <div>tutor</div>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-white  hover:border-dark">
            Search
          </button>  
        </div>
      </form>
    </div>
  );
}

export default searchForTutors