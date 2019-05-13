// db.js

import Firebase from 'firebase'
 let config = {
    apiKey: "AIzaSyAzdrYEwvkZ-xdd6H9cGojJO0HEqdbJZEs",
    authDomain: "test-database-quan.firebaseapp.com",
    databaseURL: "https://test-database-quan.firebaseio.com",
    projectId: "test-database-quan",
    storageBucket: "test-database-quan.appspot.com",
    messagingSenderId: "643655318302",
    appId: "1:643655318302:web:e739daf6b1934bae"
  };
let app = Firebase.initializeApp(config)
export const db = app.database()