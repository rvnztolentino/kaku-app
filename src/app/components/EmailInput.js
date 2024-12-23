"use client";

// components/EmailInput.js
import { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("EMAIL IS: " + email);
    alert("This feature is currently unavailable. Please check back later.");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-left p-4">
      <label htmlFor="email" className="text-dark-gray text-lg mb-2">join for more updates!</label>
      <input
        type="email"
        id="email"
        className="border rounded text-black p-2 w-128 sm:w-128 xs:w-80" 
        placeholder="enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" className="bg-black rounded hover:bg-gray transition-all duration-300 ease-in-out text-white mt-4 p-2" > submit </button>
    </form>
  );
};

export default EmailInput;
