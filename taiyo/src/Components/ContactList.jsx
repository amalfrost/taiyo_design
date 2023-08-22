import React, { useState } from 'react';
import { AiFillDelete , AiFillEdit } from 'react-icons/ai';

function ContactList({ contact, getContactId, setContacts }) {
  const [editId, setEditId] = useState(null);

  const DeleteContact = (id) => {
    getContactId(id);
  };

  function editContact(id) {
    setEditId(id);
  }

  function handleInputChange(event, id) {
    const { name, value } = event.target;

    const updatedContacts = contact.map((item) => {
      if (item.id === id) {
        return { ...item, [name]: value };
      }
      return item;
    });

    setContacts(updatedContacts);
  }

  function saveContactEdit(id) {
    setEditId(null);
  }

  return (
    <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5'>
      {contact.map((item) => (
        <div
          key={item.id}
          className='bg-white p-4 shadow-md rounded-md'
        >
          <h1 className='text-xl font-semibold'>
            {item.firstName} {item.lastName}
          </h1>
          <p>Status: {item.status ? 'Active' : 'Not Active'}</p>
          <div className='flex items-center space-x-2 mt-3'>
            <button
              onClick={() => editContact(item.id)}
              className='text-blue-500'
            >
              <AiFillEdit/>
            </button>
            <AiFillDelete
              onClick={() => DeleteContact(item.id)}
              className='text-red-600 cursor-pointer text-xl'
            />
          </div>
          {editId === item.id && (
            <div className='mt-4'>
              <input
                type='text'
                name='firstName'
                value={item.firstName}
                onChange={(event) => handleInputChange(event, item.id)}
                className='bg-gray-100 p-1 rounded-md'
              />
              <input
                type='text'
                name='lastName'
                value={item.lastName}
                onChange={(event) => handleInputChange(event, item.id)}
                className='bg-gray-100 p-1 rounded-md mt-2'
              />
              <label className='flex items-center mt-2'>
                <input
                  type='checkbox'
                  name='status'
                  checked={item.status}
                  onChange={(event) => handleInputChange(event, item.id)}
                  className='mr-2'
                />
                Active
              </label>
              <button
                onClick={() => saveContactEdit(item.id)}
                className='bg-blue-500 text-white px-2 py-1 rounded-md mt-2'
              >
                Save
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default ContactList;
