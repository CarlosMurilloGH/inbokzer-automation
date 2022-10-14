import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getStorage} from "firebase/storage";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, setDoc} from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDkyH0uECtH6cPEDvPbj1n553R5mQl92OE",
	authDomain: "catalogowspdemo.firebaseapp.com",
	databaseURL: "https://catalogowspdemo-default-rtdb.firebaseio.com",
	projectId: "catalogowspdemo",
	storageBucket: "catalogowspdemo.appspot.com",
	messagingSenderId: "596512282653",
	appId: "1:596512282653:web:474aadd73d6d254ba9cef4",
	measurementId: "G-JS8Q7ZRM96"
  };


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

//esto es con google
export async function userExists(uid){
	//buscamos en la base de datos, en la carpeta users el campo uid
    const docRef = doc(db,"users", uid);
	//mandamos a buscar el documento que tengan el uid con cierto valor
    const res = await getDoc(docRef);
    console.log(res);
	//firebase tiene la consulta exist, que nos retorna true or false
    return res.exists();
}

export async function existsTienda(tienda){
	const tiendas=[];
	//Definimos una constante de la colección en donde vamos a buscar
	const docsRef=collection(db,"tiendas");
	//Buscamos en firebase en donde tienda es igual a la tienda pasada
	const q = query(docsRef, where("tienda","==", tienda));
	//Vamos a tener un resultado de los documentos
	const querySnapshot = await getDocs(q);
  
	//obtenemos la información de los documentos
	querySnapshot.forEach((doc) =>{
        tiendas.push(doc.data());
	})
	return tiendas.length > 0 ? tiendas[0].uid : null;
  }

  export async function registerNewUser(user){
	try {
		// Hacemos la constante en donde buscamos la colección users
		const collectionRef = collection(db, "users");
		// Le damos el nombre del usuario al documento
		const docRef = doc(collectionRef, user.uid);
		//Y guardamos la información de user en el documento user
		await setDoc(docRef, user);
	} catch (error) {
	  console.log(error)
	}
  }

  export async function updateUser(user){
	try {
		const collectionRef = collection(db,"users");
		const docRef=doc(collectionRef, user.uid);
		await setDoc(docRef,user);
	} catch (error) {
		
	}
  }

  export async function getUserInfo(uid){
	try {
		// Creamos la referencia hacia el documento 
		const docRef=doc(db, "users", uid);
		const document = await getDoc(docRef);
		return document.data();
	} catch (error) {
	  console.log(error)
	}
  }

  export async function cerrarSesion(){
	await auth.signOut();
  }