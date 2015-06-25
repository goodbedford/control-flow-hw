var userLogin = {
    name: "goodbedford",
    password:"$cashmoney"
}

function getUserLogin(user){
    numChances = 2;
    tempUser = {};
    tempPassword = "";
    tempUser.name = prompt("Please Enter username");
    tempUser.password = prompt("Please Enter password:");

    if ( tempUser.password != user.password){
      for(var i = 0; i < numChances; i++ ){
        tempUser.password = prompt("Please Enter Correct Password.");
        if (tempPassword == user.password){
            console.log("Password Correct");
            break;
        }
        if (i == numChances -1){
            console.log("Sorry, No more logins.");
        }
      }
    }else{
     console.log("Thanks for joining us again "+ user.name);
     console.log("Correct Login");
    }


}

getUserLogin(userLogin);