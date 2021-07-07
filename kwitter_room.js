
  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyA-sxT7AFbmTkhfCQo6Wvr3jssTOLEwEKI",
      authDomain: "classtest-74ca2.firebaseapp.com",
      projectId: "classtest-74ca2",
      storageBucket: "classtest-74ca2.appspot.com",
      messagingSenderId: "861138405008",
      appId: "1:861138405008:web:84f4ce6614d47847d5ba15"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
