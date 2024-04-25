import css from "./Contact.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faPhone } from '@fortawesome/free-solid-svg-icons';


export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <>
      <div className={css.containerBig}>
        <div className={css.containerSmall}>
          <FontAwesomeIcon icon={faUser} />
          <p className={css.p}>{name}</p>
        </div>
        <div className={css.containerSmall}>
          <FontAwesomeIcon icon={faPhone} />
          <p className={css.p}>{number}</p>
        </div>

      </div>
      <button className={css.button} onClick={() => onDelete(id)}>Delete</button>
    </>
  );
}
