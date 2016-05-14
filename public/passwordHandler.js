/**
 * Created by Manas on 5/11/2016.
 */
function checkPassword(){
    var pwd1 = docuement.getElementById('inputPassword');
    var pwd2 = document.getElementById('confirmPassword');
    if(pwd1!=pwd2){
        alert("passwords do not match!");
    }
}