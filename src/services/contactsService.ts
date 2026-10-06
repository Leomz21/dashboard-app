import type { Contact, ContactDetail } from '../types/contact';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const CUSTOM_CONTACTS: Record<number, Pick<Contact, 'name' | 'email'>> = {
  1: { name: 'Leonor Molina', email: 'leonor.molina@gmail.com' },
  2: { name: 'Ana Moliza', email: 'ana.moliza@gmail.com' },
  3: { name: 'Sergio Ramos', email: 'sergio.ramos@gmail.com' },
  4: { name: 'Allyson Zapata', email: 'allyson.zapata@gmail.com' },
  5: { name: 'Jimena Chávez', email: 'jimena.chavez@gmail.com' },
  6: { name: 'Diana Molineros', email: 'diana.molineros@gmail.com' },
  7: { name: 'Carlos Mendoza', email: 'carlos.mendoza@gmail.com' },
  8: { name: 'Valentina Torres', email: 'valentina.torres@gmail.com' },
  9: { name: 'José Andrade', email: 'jose.andrade@gmail.com' },
  10: { name: 'Camila Rodríguez', email: 'camila.rodriguez@gmail.com' },
};

export async function getContacts(): Promise<Contact[]> {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error(`Error HTTP ${res.status}`);
  }

  const contacts: Contact[] = await res.json();

  return contacts.map((contact) => ({
    ...contact,
    ...CUSTOM_CONTACTS[contact.id],
  }));
}

export async function getContact(id: string): Promise<ContactDetail> {
  const res = await fetch(`${API_URL}/${id}`);

  if (!res.ok) {
    throw new Error(`Error HTTP ${res.status}`);
  }

  const contact: ContactDetail = await res.json();

  return {
    ...contact,
    ...CUSTOM_CONTACTS[contact.id],
  };
}
