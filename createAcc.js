//parent class //
class user{
    // Constructor //
constructor(username, password, ID){
this.username = username;
this.password = password;
this.ID = ID;
}
// make getter and setter methods that accept input information //  
}

// subclass for admins //

class admin extends user{

constructor(username, password, ID, isAdmin){
super(username, password, ID);
this.isAdmin = isAdmin;
}


}
//subclass for activated users//
class activated extends user{

constructor(username, password, ID){
super(username, password, ID);
}
}
//subclass for deactivated users//
class deactivated extends user{

constructor(username, password, ID, isForceDeactivated, isTemporarilyDeactivated){
super(username, password, ID);
this.isForceDeactivated = isForceDeactivated;
this.isTemporarilyDeactivated = isTemporarilyDeactivated;
}
}

// encrypts the user data before we store it 
function encryptData(){

}
//decrypts the user data before we grab it //
function decryptData(){

}
 // creates account from user input //
function configUserInput() { 
    const username = document.getElementById('username').value; 
    const password = document.getElementById('password').value;
    const ID = generateRandomNum();
    account = new activated(username, password, ID);
    storeUserInput(account);
    alert("Account stored sucessfully!");

    // Save the user data to localStorage //
    function storeUserInput(){
    localStorage.setItem(`userAccount`, account);
    console.log(`userAccount`);
    
}
}

// creates a unique ID for each account //
function generateRandomNum(){
    let randomNumber = ''; 
    for (let i = 0; i < 10; i++){ 
        randomNumber += Math.floor(Math.random() * 10);
    } 
 return randomNumber;
}






 




