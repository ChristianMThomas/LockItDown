//parent class //
class user{
                // Variables //
    static totalUsers;

                // Constructor //
    constructor(username, password, ID){
        this.username = username;
        this.password = password;
        this.ID = ID;
        totalUsers++;
    }  
}

// subclass for admins //

class admin extends user{

    constructor(username, password, ID, isAdmin){
       super(username, password, ID);
       this.isAdmin = isAdmin;
       totalUsers++;
}





}
//subclass for activated users//
class activated extends user{

    constructor(username, password, ID){
       super(username, password, ID);
       totalUsers++;
}
}
//subclass for deactivated users//
class deactivated extends user{

    constructor(username, password, ID, isForceDeactivated, isTemporarilyDeactivated){
       super(username, password, ID);
       this.isForceDeactivated = isForceDeactivated;
       this.isTemporarilyDeactivated = isTemporarilyDeactivated;
       totalUsers++;
}
}

 function login(){
    console.log("You clicked the login button");
    const user = new activated(acceptInput.usernameFromInput, acceptInput.passwordFromInput, acceptInput.userId);
}


function acceptInput(){
    usernameFromInput = document.getElementById("Username");
    passwordFromInput = document.getElementById("Password");
    length = 12;
    const userId = Math.floor(Math.random() * length);
}





