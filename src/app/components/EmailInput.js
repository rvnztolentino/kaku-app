// components/EmailInput.js
import React, { useState } from 'react';

const EmailInput = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex flex-col items-center p-4">
      <label htmlFor="email" className="mb-2 text-lg">join for more updates!</label><br></br>
      <input
        type="email"
        id="email"
        className="border rounded p-2 text-black"
        value={email}
        onChange={handleInputChange}
      />
      <p className="mt-2">You entered: {email}</p>
    </div>
  );
};

export default EmailInput;
