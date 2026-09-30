import type { Contact } from '../types/contact';
import ContactRow from './ContactRow';

const contacts: Contact[] = [
  { id: 1, name: 'Leonor Molina', email: 'leomz@gmail.com' },
  { id: 2, name: 'Sergio Ramos', email: 'sergioramos@gmail.com' },
  { id: 3, name: 'Allyson Zapata', email: 'allyz@gmail.com' },
  { id: 4, name: 'Ana Molza', email: 'anamolza@gmail.com' },
];

function ContactList() {
  return (
    <table className="table table-striped table-sm">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nombre</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <ContactRow key={contact.id} contact={contact} />
        ))}
      </tbody>
    </table>
  );
}

export default ContactList;