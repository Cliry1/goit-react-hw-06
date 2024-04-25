import {useState, useEffect} from "react"
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import SearchBox from './SearchBox/SearchBox';
import initialContacts from '../initialContacts.json'

export default function App() {
  const [filter, setFilter]= useState("");
  const [contacts, setContacts]= useState(()=>{
    const savedContacts = window.localStorage.getItem("objContacts");
    const parsedContacts = JSON.parse(savedContacts);
    if(savedContacts){
      return parsedContacts;
    }
    else{
      return initialContacts
    }
  });
  useEffect(()=>{
    window.localStorage.setItem("objContacts", JSON.stringify(contacts));
  },[contacts])
  
  const addContact= (newContact)=>{
    setContacts((prevContacts)=>{
      return [...prevContacts,newContact]
    })
  };
  const deleteContact = (idContact)=>{
    setContacts((prevContacts)=>{
      return prevContacts.filter((contact)=>contact.id !== idContact)
    })
  }

  const visibleContacts = contacts.filter((contact)=> contact.name.toLowerCase().includes(filter.toLowerCase()));
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact}/>
      <SearchBox value={filter} onFilter={setFilter}/>
      <ContactList contacts={visibleContacts} onDelete={deleteContact}/>
    </>

  )
}