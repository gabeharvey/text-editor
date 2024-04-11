import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
// This Allows Content to be Accepted and Added to the Database
export const putDb = async (content) => {
  const textEditDb = await openDB('jate', 1);
  const tx = textEditDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('Data is Saved to the Database.', result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
