import { useSelector } from "react-redux";
import ContactItem from "../ContactItem/ContactItem";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const filterName = useSelector((state) => state.filter.search);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName.toLowerCase())
  );

  return (
    <ul className={styles.ContactList}>
      {filteredContacts.map((contact) => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
}
