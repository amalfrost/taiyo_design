import React, { useState } from 'react'

function ContactForm({addContactHandler}) {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newContact = {
      firstName: firstName,
      lastName: lastName,
      status: status
    };

    addContactHandler(newContact);

    setFirstName('');
    setLastName('');
    setStatus(false);
  }

  return (
    <div className="max-w-md w-72 mx-auto bg-white p-6 shadow-md rounded-md">
    <h2 className="text-lg font-semibold mb-4">Add Contact</h2>
    <form
     onSubmit={handleSubmit}
     >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">First Name</label>
        <input
          type="text"
          name="firstname"
          value={firstName}
          onChange={ (e=>setFirstName(e.target.value))}
          className="mt-1 p-2 border rounded w-full"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Last Name</label>
        <input
type="text"
name="lastname"
value={lastName}
onChange={(e=> setLastName(e.target.value))} 
className="mt-1 p-2 border rounded w-full"
required
/>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Status
          <input
            type="checkbox"
            name="status"
            checked={status}
            onChange={(e=> setStatus(e.target.value))}
            className="ml-2"
          />
        </label>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Add Contact
      </button>
    </form>
  </div>
  )
}

export default ContactForm