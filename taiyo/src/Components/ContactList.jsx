import React, { useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

function ContactList({ contact, getContactId , setContacts }) {
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
    <div className='flex gap-3 flex-wrap mt-5   '>
      {contact.map((item) => {
        return (
          <div key={item.id} className=' w-52 h-20 m-3 bg-yellow-500 '>
            <h1 className='text-2xl text-white'>
              {item.firstName} {item.lastName}
            </h1>
              <AiFillDelete
                onClick={() => DeleteContact(item.id)}
                className=' text-red-600 cursor-pointer text-2xl float-right inline-block'
              />
            <button onClick={() => editContact(item.id)}>Edit</button>
            <p>Status : {item.status ? 'Active' : 'Not Active'}</p>
            {editId === item.id ? (
              <div className=' bg-green-500 w-24 gap-2 mt-39px  z-10 relative '>
                <input className='bg-green-200 '
                  type='text'
                  name='firstName'
                  value={item.firstName}
                  onChange={(event) => handleInputChange(event, item.id)}
                />
                <input className='bg-green-200 '
                  type='text'
                  name='lastName'
                  value={item.lastName}
                  onChange={(event) => handleInputChange(event, item.id)}
                />
                <input className='bg-green-200 w-10 '
                // className='w-10'
                  type='checkbox'
                  name='status'
                  checked={item.status}
                  onChange={(event) => handleInputChange(event, item.id)}
                />
                <button  onClick={() => saveContactEdit(item.id)}>Save</button>
              </div>
            ) : ( 
                ""
            )}
          </div>
        );
      })}
    </div>
  );
}

export default ContactList;
