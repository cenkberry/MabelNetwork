import { getFirestore } from "firebase/firestore";
import firebaseApp from './firestoreConfig.js';

const db = getFirestore(firebaseApp);
export default db;