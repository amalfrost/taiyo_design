import React, { useState, useEffect, useMemo } from 'react';
// import { v4 as uuidv4 } from 'react-uuid';
import { v4 as uuid } from 'uuid';
import ContactForm from '../Components/ContactForm';
import ContactList from '../Components/ContactList';

function Contacts() {
  const [displayContact, setDisplayContact] = useState(false);
  const [contacts, setContacts] = useState([]);
    const newUuid = uuid()
  
  // console.log("New uuid"+newUuid)

  const addContactHandler = (newContact) => {
    const contactWithUUID = { ...newContact , id:newUuid  }; // Add UUID to the new contact
    setContacts(prevContacts => [...prevContacts, contactWithUUID]);
  }
  // console.log(contacts)

  const handleDelete = (id) =>{
    const newContactList =  contacts.filter((contact) =>{
      return contact.id !== id
    })

    setContacts(newContactList)
  }
  const LOCAL_STORAGE_KEY = 'contacts';

  useEffect(() => {
    const retrieveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retrieveContact) {
      setContacts(prevContacts => [...prevContacts, ...retrieveContact]);
    }
  }, []);  
  const updateLocalStorage = useMemo(() => {
    return () => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    };
  }, [contacts]);
  // const setItem = () => useMemo (()=>  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts)), [contacts])
  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
    // setItem()
  // }, [contacts]);
  updateLocalStorage();
  }, [updateLocalStorage]);

  return (
    <div className={`flex flex-col items-center justify-center`}>
      <button className={`bg-orange-200 mb-10 w-72 text-xl border border-black border-solid rounded-md p-2`} onClick={() => setDisplayContact(!displayContact)}>Create Contact</button>

      {displayContact && <ContactForm addContactHandler={addContactHandler} />}

      <ContactList contact={contacts} getContactId ={handleDelete} setContacts={setContacts} />


    </div>
  );
}

export default Contacts;
