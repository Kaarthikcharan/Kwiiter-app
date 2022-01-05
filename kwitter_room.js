var firebaseConfig = {
      apiKey: "AIzaSyBA4xtxjei-H3q-sfK0t-jGDyWR9n-QtS0",
      authDomain: "social-website-d2bd4.firebaseapp.com",
      databaseURL: "https://social-website-d2bd4-default-rtdb.firebaseio.com",
      projectId: "social-website-d2bd4",
      storageBucket: "social-website-d2bd4.appspot.com",
      messagingSenderId: "1023513704217",
      appId: "1:1023513704217:web:f2e2e3a35182476aacf788",
      measurementId: "G-Q3MGS94BCK"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+user_name+" !";

function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {
                  childKey  = childSnapshot.key;
       Room_names = childKey;
       row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}