class user{
                // Variables //
    usernameFromInput = document.getElementById("Username");
    passwordFromInput = document.getElementById("Password");
    userId;
    static totalUsers;



                // Constructor //
    constructor(username, password, ID){
        this.usernameFromInput = username;
        this.passwordFromInput = password;
        this.userId = ID;

        totalUsers++;

                // Methods //

    }
    
}

//parent class //




class admin extends user{

    constructor(username, password, ID, isAdmin){
       super(username, password, ID);
       this.isAdmin = isAdmin;
       totalUsers++;
}





}

// subclass for admins //

class deactivated extends user{

    constructor(username, password, ID, isForceDeactivated, isTemporarilyDeactivated){
       super(username, password, ID);
       this.isForceDeactivated = isForceDeactivated;
       this.isTemporarilyDeactivated = isTemporarilyDeactivated;
       totalUsers++;
}
}




