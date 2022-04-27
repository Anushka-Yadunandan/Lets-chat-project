
var firebaseConfig = {
      apiKey: "AIzaSyCtj6I0YVoyHjRQFMYoy5mQcoXMYJEQA6A",
      authDomain: "kwitter-a4c43.firebaseapp.com",
      databaseURL: "https://kwitter-a4c43-default-rtdb.firebaseio.com",
      projectId: "kwitter-a4c43",
      storageBucket: "kwitter-a4c43.appspot.com",
      messagingSenderId: "480634299050",
      appId: "1:480634299050:web:b00efecd908fa68815a6d3"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value ;

      firebase.database().ref("/").child(room_name).update({
        purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
 console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'  >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();



function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
           window.location = "kwitter.html";
}