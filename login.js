
// login user if their data matches data grabbed from storage AND if they pass 2 factor authentification // 
function login(){
    console.log("You clicked the login button");
    window.location.href = "index.html";
}

// redirects user to create an account page //
function createAccount(){
    setTimeout(function(){window.location.href = "createAcc.html"}, 1000);   
}
// redirects user to forgot password page //
function forgotPassword(){
    setTimeout(function(){window.location.href = "forgotPass.html"}, 1000);  
}
// redirects user to deactivate account page //

function deactivateAccount(){
    // make it so only admins can approve and disapprove the deactivication  once a request is sent //
}


