var firebaseConfig = {
    apiKey: "AIzaSyDufAnpe3A0DwygRNinUHxKfQ94PZ_ZZsM",
    authDomain: "kivi-7aa77.firebaseapp.com",
    databaseURL: "https://kivi-7aa77-default-rtdb.firebaseio.com",
    projectId: "kivi-7aa77",
    storageBucket: "kivi-7aa77.appspot.com",
    messagingSenderId: "723052017468",
    appId: "1:723052017468:web:8d58018db6e5d368375039"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
 document.getElementById("user_name").innerHTML="welcome"+user_name+"!";

function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref ("/").child(room_name).update({
        purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location= "kwitter_page.html";
}

getData() ;
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
      window.location = "index.html";
}

function  send() {

}

































