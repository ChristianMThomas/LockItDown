//parent class //
class user {
    // Constructor //
    constructor(username, password, ID) {
        this.username = username;
        this.password = password;
        this.ID = ID;
    }
    // make getter and setter methods that accept input information //  
}

// subclass for admins //
class admin extends user {

    constructor(username, password, ID, isAdmin) {
        super(username, password, ID);
        this.isAdmin = isAdmin;
    }


}
//subclass for activated users//
class activated extends user {

    constructor(username, password, ID) {
        super(username, password, ID);
    }
}
//subclass for deactivated users//
class deactivated extends user {

    constructor(username, password, ID, isForceDeactivated, isTemporarilyDeactivated) {
        super(username, password, ID);
        this.isForceDeactivated = isForceDeactivated;
        this.isTemporarilyDeactivated = isTemporarilyDeactivated;
    }
}

// creates account from user input //
function configUserInput() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const ID = generateRandomNum();

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let temp = new activated(username, password, ID);
    users.push(temp);
    localStorage.setItem('users', JSON.stringify(users));
    console.log(users);
    
    

    // creates a unique ID for each account //
    function generateRandomNum() {
        let randomNumber = '';
        for (let i = 0; i < 10; i++) {
            randomNumber += Math.floor(Math.random() * 10);
        }
        return randomNumber;
    }
}



// to clear local storage
//localStorage.clear()
















