import { db } from "./FirebaseConfig";
import { collection, addDoc, getDocs, doc, deleteDoc} from 'firebase/firestore';

export const countCabsInDB = async () => {
    try {
        const cabsCollection = collection(db, 'cabs-list')
        const querySnapshot = await getDocs(cabsCollection)
        return querySnapshot.size
    } catch (error) {
        console.log('Error counting cabs:', error)
        return 0
    }
}

export const addCabToDB = async (cab) => {
    try {
        const docRef = await addDoc(collection(db, 'cabs-list'), cab)
        console.log('Cab added with ID: ', docRef.id)
        return docRef.id.toString()
    } catch (error) {
        console.log('Error adding the cab', error)
    }
}

export const getCabsFromDB = async () => {
    try {
        const cabsCollection = collection(db, 'cabs-list')
        const querySnapshot = await getDocs(cabsCollection)
        const cabs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        return cabs
    } catch (error) {
        console.log('Error fetching cabs:', error)
        return []
    }
}


export const deleteCabFromDB = async (id) => {
    try {
        const itemRef = doc(db, 'cabs-list', id)
        await deleteDoc(itemRef)
        console.log('Cab deleted with ID: ', id)
    } catch (error) {
        console.log('Error deleting the cab:', error)
    }
}
