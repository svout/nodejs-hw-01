import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises'
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {

    let contacts = [];

    try {
        const exestingContacts = await fs.readFile(PATH_DB, 'utf-8');
        contacts = JSON.parse(exestingContacts)

    } catch (error) {
        console.log(error)
    }

    contacts.push(createFakeContact());

    try {
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 3), 'utf-8')

    } catch (error) {
        console.log(error)
    }
};

addOneContact();
