

function login() {

}
// function to login user
var counter = 0;
function login() {
    // get element ref from template file
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    if(username.value == 'immanuelgo' && password.value  == 'password123') {
       window.location.href = './index.html';
       counter = 0;
    } else {
        counter ++;
        if(counter ==5) {
            window.location.href = './error.html';
        } else { 
        console.log ('counter.....', counter);
        //perform error handling
        var span = document.getElementById('error');
        handleError(span, counter);
        }
    }
}


//set and display error
function handleError(span) {
    var errMsg = `Login error! Please try again! You have ${5 - counter} attempt(s) left!`;
    span.innerHTML = errMsg;
    span.style = 'display:block;';
    resetError(span)
    return errMsg;
}

//reset after 3 seconds
function resetError(span) {
    setTimeout(function () {
        span.style = 'display:none';
    }, 3000);
}