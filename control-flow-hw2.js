var userLogin = {
    name: "",
    password:""
}

function getUserLogin(user){
    user.name = prompt("Please Enterusername");
    user.password = prompt("Please Enter password:");

    console.log("Thanks for joining us again "+ user.name);

}

getUserLogin(userLogin);