import css from "./ContactList.module.css"
import Contact from "../Contact/Contact"

export default function ContactList({contacts, onDelete}) {

  return (
    <ul className={css.ul}>
      {
        contacts.map((contact)=>(
          <li key={contact.id} className={css.li}>
              <Contact contact={contact} onDelete={onDelete}></Contact>
          </li>
          
        ))
      }
    </ul>
  )
}

