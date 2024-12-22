class user{
                // Variables //
    usernameFromInput = document.getElementById("Username");
    passwordFromInput = document.getElementById("Password");
    isAdministrator;
    static totalUsers;



                // Constructor //
    constructor(username, password, admin){
        this.usernameFromInput = username;
        this.passwordFromInput = password;
        this.isAdministrator = admin;
        totalUsers++;

                // Methods //

    }


    



}