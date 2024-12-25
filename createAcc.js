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

 




