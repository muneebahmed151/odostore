// // // import { initializeApp } from "firebase/app";
// // // import { getAuth } from "firebase/auth";
// // // import { getDatabase } from "firebase/database";
// // // import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore"; // Added enableIndexedDbPersistence
// // // import { getStorage } from "firebase/storage";

// // // const firebaseConfig = {
// // //   apiKey: "AIzaSyDSCt-26eR9PABAO1ViXUsBaIVgBjTCyAQ",
// // //   authDomain: "odo-store.firebaseapp.com",
// // //   databaseURL: "https://odo-store-default-rtdb.firebaseio.com",
// // //   projectId: "odo-store",
// // //   storageBucket: "odo-store.firebasestorage.app",
// // //   messagingSenderId: "41631223459",
// // //   appId: "1:41631223459:web:42d7b74eed653c51f33916"
// // // };

// // // // Initialize Firebase
// // // const app = initializeApp(firebaseConfig);

// // // // Initialize services
// // // const auth = getAuth(app);
// // // const database = getDatabase(app);
// // // const db = getFirestore(app);
// // // const storage = getStorage(app);
// // // // const handle

// // // // Enable offline persistence (optional)
// // // if (typeof window !== 'undefined') { // Only enable in browser environment
// // //   enableIndexedDbPersistence(db).catch((err) => {
// // //     if (err.code === 'failed-precondition') {
// // //       console.warn("Offline persistence can only be enabled in one tab at a time.");
// // //     } else if (err.code === 'unimplemented') {
// // //       console.warn("The current browser does not support offline persistence.");
// // //     }
// // //   });
// // // }

// // // export { app, auth, database, db, storage };

// // import { initializeApp } from "firebase/app";
// // import { 
// //   getAuth, 
// //   createUserWithEmailAndPassword,
// //   signInWithEmailAndPassword,
// //   GoogleAuthProvider,
// //   signInWithPopup,
// //   onAuthStateChanged
// // } from "firebase/auth";
// // import { 
// //   getFirestore, 
// //   collection, 
// //   addDoc, 
// //   getDocs, 
// //   getDoc, 
// //   doc, 
// //   query, 
// //   where,
// //   updateDoc,
// //   deleteDoc,
// //   enableIndexedDbPersistence
// // } from "firebase/firestore";
// // import { 
// //   getStorage, 
// //   ref, 
// //   uploadBytes, 
// //   getDownloadURL,
// //   deleteObject
// // } from "firebase/storage";

// // const firebaseConfig = {
// //   apiKey: "AIzaSyDSCt-26eR9PABAO1ViXUsBaIVgBjTCyAQ",
// //   authDomain: "odo-store.firebaseapp.com",
// //   databaseURL: "https://odo-store-default-rtdb.firebaseio.com",
// //   projectId: "odo-store",
// //   storageBucket: "odo-store.firebasestorage.app",
// //   messagingSenderId: "41631223459",
// //   appId: "1:41631223459:web:42d7b74eed653c51f33916"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);

// // // Initialize services
// // const auth = getAuth(app);
// // const db = getFirestore(app);
// // const storage = getStorage(app);
// // const googleProvider = new GoogleAuthProvider();

// // // Enable offline persistence (optional)
// // if (typeof window !== 'undefined') {
// //   enableIndexedDbPersistence(db).catch((err) => {
// //     if (err.code === 'failed-precondition') {
// //       console.warn("Offline persistence can only be enabled in one tab at a time.");
// //     } else if (err.code === 'unimplemented') {
// //       console.warn("The current browser does not support offline persistence.");
// //     }
// //   });
// // }

// // // CRUD Operations
// // const firebaseService = {
// //   // Authentication
// //   signupUser: (email, password) => createUserWithEmailAndPassword(auth, email, password),
// //   signinUser: (email, password) => signInWithEmailAndPassword(auth, email, password),
// //   signinWithGoogle: () => signInWithPopup(auth, googleProvider),
// //   onAuthChange: (callback) => onAuthStateChanged(auth, callback),

// //   // Create
// //   createDocument: async (collectionName, data) => {
// //     return await addDoc(collection(db, collectionName), data);
// //   },

// //   // Read
// //   getDocuments: (collectionName) => getDocs(collection(db, collectionName)),
// //   getDocumentById: async (collectionName, id) => {
// //     const docRef = doc(db, collectionName, id);
// //     return await getDoc(docRef);
// //   },
// //   queryDocuments: (collectionName, field, operator, value) => {
// //     const q = query(collection(db, collectionName), where(field, operator, value));
// //     return getDocs(q);
// //   },

// //   // Update
// //   updateDocument: async (collectionName, id, data) => {
// //     const docRef = doc(db, collectionName, id);
// //     return await updateDoc(docRef, data);
// //   },

// //   // Delete
// //   deleteDocument: async (collectionName, id) => {
// //     const docRef = doc(db, collectionName, id);
// //     return await deleteDoc(docRef);
// //   },

// //   // Storage
// //   uploadFile: async (file, path) => {
// //     const storageRef = ref(storage, path);
// //     await uploadBytes(storageRef, file);
// //     return getDownloadURL(storageRef);
// //   },
// //   deleteFile: async (path) => {
// //     const storageRef = ref(storage, path);
// //     return await deleteObject(storageRef);
// //   },
// //   getFileUrl: (path) => getDownloadURL(ref(storage, path))
// // };

// // export { app, auth, db, storage, firebaseService };


// import { createContext, useContext, useState, useEffect } from "react";
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   onAuthStateChanged,
// } from "firebase/auth";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   getDocs,
//   getDoc,
//   doc,
//   query,
//   where,
// } from "firebase/firestore";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// const FirebaseContext = createContext(null);

// const firebaseConfig = {
//   apiKey: "AIzaSyDUa8bNR8kx18NKdD5HYJQVgpkNRvzyvBs",
//   authDomain: "bookify-8b4e9.firebaseapp.com",
//   projectId: "bookify-8b4e9",
//   storageBucket: "bookify-8b4e9.appspot.com",
//   messagingSenderId: "660445081845",
//   appId: "1:660445081845:web:a896ba2f629785712c55bc",
// };

// export const useFirebase = () => useContext(FirebaseContext);

// const firebaseApp = initializeApp(firebaseConfig);
// const firebaseAuth = getAuth(firebaseApp);
// const firestore = getFirestore(firebaseApp);
// const storage = getStorage(firebaseApp);

// const googleProvider = new GoogleAuthProvider();

// export const FirebaseProvider = (props) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     onAuthStateChanged(firebaseAuth, (user) => {
//       if (user) setUser(user);
//       else setUser(null);
//     });
//   }, []);

//   const signupUserWithEmailAndPassword = (email, password) =>
//     createUserWithEmailAndPassword(firebaseAuth, email, password);

//   const singinUserWithEmailAndPass = (email, password) =>
//     signInWithEmailAndPassword(firebaseAuth, email, password);

//   const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

//   const handleCreateNewListing = async (name, isbn, price, cover) => {
//     const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
//     const uploadResult = await uploadBytes(imageRef, cover);
//     return await addDoc(collection(firestore, "books"), {
//       name,
//       isbn,
//       price,
//       imageURL: uploadResult.ref.fullPath,
//       userID: user.uid,
//       userEmail: user.email,
//       displayName: user.displayName,
//       photoURL: user.photoURL,
//     });
//   };

//   const listAllBooks = () => {
//     return getDocs(collection(firestore, "books"));
//   };

//   const getBookById = async (id) => {
//     const docRef = doc(firestore, "books", id);
//     const result = await getDoc(docRef);
//     return result;
//   };

//   // const getImageURL = (path) => {
//   //   return getDownloadURL(ref(storage, path));
//   // };

//   const placeOrder = async (bookId, qty) => {
//     const collectionRef = collection(firestore, "books", bookId, "orders");
//     const result = await addDoc(collectionRef, {
//       userID: user.uid,
//       userEmail: user.email,
//       displayName: user.displayName,
//       photoURL: user.photoURL,
//       qty: Number(qty),
//     });
//     return result;
//   };

//   const fetchMyBooks = async (userId) => {
//     const collectionRef = collection(firestore, "books");
//     const q = query(collectionRef, where("userID", "==", userId));

//     const result = await getDocs(q);
//     return result;
//   };

//   const getOrders = async (bookId) => {
//     const collectionRef = collection(firestore, "books", bookId, "orders");
//     const result = await getDocs(collectionRef);
//     return result;
//   };

//   const isLoggedIn = user ? true : false;

//   return (
//     <FirebaseContext.Provider
//       value={{
//         signinWithGoogle,
//         signupUserWithEmailAndPassword,
//         singinUserWithEmailAndPass,
//         handleCreateNewListing,
//         listAllBooks,
//         getImageURL,
//         getBookById,
//         placeOrder,
//         fetchMyBooks,
//         getOrders,
//         isLoggedIn,
//         user,
//       }}
//     >
//       {props.children}
//     </FirebaseContext.Provider>
//   );
// };
import React from 'react';
import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, query, orderByChild, equalTo, push, set, onValue, update, remove, off } from "firebase/database";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyDSCt-26eR9PABAO1ViXUsBaIVgBjTCyAQ",
  authDomain: "odo-store.firebaseapp.com",
  databaseURL: "https://odo-store-default-rtdb.firebaseio.com",
  projectId: "odo-store",
  storageBucket: "odo-store.appspot.com",
  messagingSenderId: "41631223459",
  appId: "1:41631223459:web:42d7b74eed653c51f33916"
};

export const useFirebase = () => useContext(FirebaseContext);

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const database = getDatabase(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        loadProducts();
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
      const productsRef = ref(database, 'products');
      off(productsRef);
    };
  }, []);

  const loadProducts = () => {
    const productsRef = ref(database, 'products');
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      const productsArray = data ? Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      })) : [];
      setProducts(productsArray);
    });
  };

  const addProduct = async (productData) => {
    try {
      const newProductRef = push(ref(database, 'products'));
      await set(newProductRef, {
        ...productData,
        createdAt: new Date().toISOString(),
        userId: user?.uid,
        userEmail: user?.email
      });
      return newProductRef.key;
    } catch (error) {
      console.error("Error adding product:", error);
      throw error;
    }
  };
  const updateProduct = async (productId, updatedData) => {
  try {
    await update(ref(database, `products/${productId}`), updatedData);
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  }
};

const deleteProduct = async (productId) => {
  try {
    await remove(ref(database, `products/${productId}`));
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};
  const getProducts = () => {
  return ref(database, "products");
};

const getProductsByUser = (userId) => {
  const productsRef = ref(database, 'products');
  return query(productsRef, orderByChild('userId'), equalTo(userId));
};


  return (
    <FirebaseContext.Provider
  value={{
    auth,
    database,
    user,
    products,
    addProduct,
    signInWithGoogle: () => signInWithPopup(auth, googleProvider),
    signUpWithEmail: (email, password) =>
      createUserWithEmailAndPassword(auth, email, password),
    signInWithEmail: (email, password) =>
      signInWithEmailAndPassword(auth, email, password),
    isLoggedIn: !!user,
    getProducts: () => products,
    getProductsByCategory: (category) =>
      products.filter((p) => p.category === category),
    getProductById: (id) => products.find((p) => p.id === id),
    getProductsByUser: (userId) =>
      products.filter((p) => p.userId === userId),

    // ✅ NEW REALTIME DB FUNCTIONS
    getProductsRef: getProducts,
    getProductsRefByUser: getProductsByUser,
    updateProduct,
    deleteProduct,
  }}
>
  {children}
</FirebaseContext.Provider>

  );
};

export { auth };