import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises'

export const removeLastContact = async () => {

    try {
        const existingContacts = await fs.readFile(PATH_DB, 'utf-8')

        const contacts = JSON.parse(existingContacts)

        if(contacts.length > 0) {
            contacts.pop()

            fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8')
        }

    } catch (error) {
        console.log(error)
    }

    
};

removeLastContact();
