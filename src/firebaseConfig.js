import {  initializeApp  }  from  "firebase/app" ;
import {  getFirestore  }  from  "firebase/firestore" ;

const firebaseConfig = {
        apiKey: "AIzaSyCkDJiGiTCzjY1pSo6OR4TMJDm9DdtEkb8",
        authDomain: "competencias-4-84765.firebaseapp.com",
        databaseURL: "https://competencias-4-84765-default-rtdb.firebaseio.com",
        projectId: "competencias-4-84765",
        storageBucket: "competencias-4-84765.appspot.com",
        messagingSenderId: "881180405917",
        appId: "1:881180405917:web:2be103b24c51efc20a2474",
        measurementId: "G-YF7LK77ZX0"
};
const app = initializeApp(firebaseConfig);
export default getFirestore();