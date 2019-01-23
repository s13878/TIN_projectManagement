import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var config = {
    apiKey: "AIzaSyB_3wMfO3oIJ7BIpuaMaK2heY9_mGFtRGo",
    authDomain: "tin-marioplan.firebaseapp.com",
    databaseURL: "https://tin-marioplan.firebaseio.com",
    projectId: "tin-marioplan",
    storageBucket: "tin-marioplan.appspot.com",
    messagingSenderId: "1011316353230"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;