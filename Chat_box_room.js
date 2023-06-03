const firebaseConfig = {
      apiKey: "AIzaSyBSo-uA3_Lp290CMMHlc8dVNFARrk-TSfE",
      authDomain: "kwitter-fcdba.firebaseapp.com",
      databaseURL: "https://kwitter-fcdba-default-rtdb.firebaseio.com",
      projectId: "kwitter-fcdba",
      storageBucket: "kwitter-fcdba.appspot.com",
      messagingSenderId: "871080398643",
      appId: "1:871080398643:web:0e70edf8cc95d6a8b33846",
      measurementId: "G-EGRNLCNV63"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console.log("Room Name - " + Room_names);
       row = "div class = 'room_name' id = " + Room_names + "onclick = 'redirectToRoomName(this.id)' ># " + Room_names + "</div><hr>";
       document.getElementById("output").innerHTML += row;

      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update
      ({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name",room_name);
      window.location = "Chat_box_page.html";

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name",name);
            window.location = "Chat_box_page.html";
      }
}