import { Link } from 'react-router';
import type { Contact } from '../types/contact';

type ContactRowProps = {
  contact: Contact;
};

function ContactRow({ contact }: ContactRowProps) {
  return (
    <tr>
      <td>{contact.id}</td>
      <td>
        <Link to={`/contactos/${contact.id}`}>{contact.name}</Link>
      </td>
      <td>{contact.email}</td>
    </tr>
  );
}

export default ContactRow;
