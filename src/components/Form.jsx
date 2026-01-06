import React, { useState } from "react";

function Form() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Course, setCourse] = useState("");
  const [Fees, setFees] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Student added successfully!");
  };

  return (
    <div className="bg-[#f2f3f6] w-full h-screen">
      <div className=" p-6  text-[#414b60] text-4xl px-20">
        <h1 className="py-4">Add Student</h1>
        <hr className="text-[#e0e4ec]" />
      </div>
      <div>
        <form
          action="post"
          className="flex justify-center flex-col bg-white text-xl text-[#414b60] space-y-6 p-10 rounded-lg w-1/2 mx-auto shadow-lg "
        >
          <label htmlFor="name" className="font-semibold">
            Student Name
          </label>
          <input
            value={Name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            id="name"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <label htmlFor="email" className="font-semibold">
            Email
          </label>
          <input
            value={Email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            id="email"
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <label htmlFor="course" className="font-semibold">
            Course
          </label>
          <select
            id="course"
            className="border border-gray-300 rounded px-4 py-2 w-full"
            value={Course}
            onChange={(e) => {
              setCourse(e.target.value);
            }}
          >
            <option value="math">Mathematics</option>
            <option value="science">Science</option>
            <option value="history">History</option>
            <option value="english">English</option>
            <option value="art">Art</option>
            <option value="computer">Computer</option>
            <option value="economics">Economics</option>
          </select>
          <label htmlFor="fees" className="font-semibold">
            Fees
          </label>
          <input
            type="number"
            id="fees"
            className="border border-gray-300 rounded px-4 py-2 w-full"
            value={Fees}
            onChange={(e) => {
              setFees(e.target.value);
            }}
          />
          <button
            type="submit"
            onSubmit={handleSubmit}
            className="bg-[#2061c6] text-white py-2 px-4 w-80 m-auto rounded hover:bg-blue-600"
          >
            Add Student
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
