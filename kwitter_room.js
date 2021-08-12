
//ADD YOUR FIREBASE LINKS HERE
  var firebaseConfig = {
    apiKey: "AIzaSyDFjYhOPnA8tBqIFTkW8nMBkCwYJaR5lM0",
    authDomain: "kwitter-d0eea.firebaseapp.com",
    databaseURL: "https://kwitter-d0eea-default-rtdb.firebaseio.com",
    projectId: "kwitter-d0eea",
    storageBucket: "kwitter-d0eea.appspot.com",
    messagingSenderId: "283289870035",
    appId: "1:283289870035:web:41cf21265f277e9be8fe26"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
  function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
      purpose:"add room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location="kwitter_page.html";
  }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";S
}