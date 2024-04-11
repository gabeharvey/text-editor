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

// This Allows Content to be Accepted and Added to the Database
export const putDb = async (content) => {
  const textEditDb = await openDB('jate', 1);
  const tx = textEditDb.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ id: 1, value: content });
  const result = await request;
  console.log('Data is Saved to the Database.', result);
};

// This Retrieves Content From Database
export const getDb = async () => {
  const textEditDb = await openDB('jate', 1);
  const tx = textEditDb.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.get(1);
  const result = await request;
  result
  ? console.log('Data Returned from Database.', result.value)
  : console.log('Data Not in Database.');
  return result?.value;
};

initdb();
