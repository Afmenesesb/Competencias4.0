import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';

const firebaseConfig={

        apiKey: "AIzaSyCkDJiGiTCzjY1pSo6OR4TMJDm9DdtEkb8",
        authDomain: "competencias-4-84765.firebaseapp.com",
        projectId: "competencias-4-84765",
        storageBucket: "competencias-4-84765.appspot.com",
        messagingSenderId: "881180405917",
        appId: "1:881180405917:web:2be103b24c51efc20a2474",
        measurementId: "G-YF7LK77ZX0"         
};
firebase.initializeApp(firebaseConfig);
export default firebase;