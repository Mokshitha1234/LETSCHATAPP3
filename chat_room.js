username = localStorage.getItem("user_name")

function start(){
    document.getElementById("welcome").innerHTML = "Welcome "+ username +"!"
}

function addRoom(){
    roomName = document.getElementById("roomName").value;
    localStorage.setItem("roomName", roomName)
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    })
}

function getData()   {firebase.database().ref("/").on('value' ,
function (snapshot)  {document.getElementById("output").innerHTML = 
"";snapshot.forEach(function(childSnapshot)   {childKey = 
childSnapshot.key;
                  Room_names = childKey;
                  //Start code

                  //End code
                  }); }); }
                  getData();
