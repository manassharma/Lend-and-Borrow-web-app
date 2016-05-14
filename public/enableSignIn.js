/**
 * Created by Manas on 5/7/2016.
 */

function clearEmailBox(){
    document.getElementById('email').value="";
}

function clearPasswordBox(){
    document.getElementById('password').value="";
}

function enableSignInButton(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('email').value;
    if(email.length>0 && password.length>0){
        document.getElementById('signIn').disabled=false;
    }
}
