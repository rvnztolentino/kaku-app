"use client";

// components/EmailInput.js
import { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("EMAIL IS: " + email);
    alert("This feature is currently unavailable. Please check back later.");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-left p-4">
      <label htmlFor="email" className="text-dark-gray text-lg mb-2">join for more updates!</label>
      <input
        type="email"
        id="email"
        className="border rounded p-2 text-black w-128 sm:w-128 xs:w-80" 
        placeholder="enter your email"
        value={email}
        onChange={handleInputChange}
      />
      <button type="submit" className="mt-4 text-black bg-light-gray-2 rounded p-2 hover:bg-light-gray transition-all duration-300 ease-in-out" > Submit </button>
    </form>
  );
};

export default EmailInput;
