// variables //
  let wasSuccessful;

// functions//

// redirect user to homepage //
const redirectHome = (url) => {window.location.href = url;}


// login user if their data matches data grabbed from storage AND if they pass 2 factor authentification // 
function login(){
    grabUserInput(wasSuccessful);
    wasSuccessful ? redirectHome("home.html") : alert("Your Username or Password is incorrect! Please Try again.");
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

// retrieves the user data from localStorage //
function grabUserInput(wasSuccessful){ 
    const storedInput = localStorage.getItem(account);
            if (storedInput) {
                alert('Retrieved Input: ' + storedInput);
                wasSuccessful = true;
            } else {
                alert('No input found in storage.');
                wasSuccessful = false;
            }
        return wasSuccessful;
    }



    // FIX STORAGE FOR CREATE ACC AND LOGIN // 1/1/25