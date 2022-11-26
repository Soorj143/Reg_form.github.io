// function showpass(){
//     // console.log("test func")

//     var pass1 = document.getElementById("pass1");
//     var pass2 = document.getElementById("pass2");

//     if(pass1.type == 'password' && pass2.type == 'password'){
//         pass1.type = 'text';
//         pass2.type = 'text';
//     }
//     else{
//         pass1.type = 'password';
//         pass2.type = 'password';
//     }
// }

function FormValidation(){
    var fname = document.RegisterForm.fname.value;
    var lname = document.RegisterForm.lname.value;
    var age = document.RegisterForm.age.value;
    var email = document.RegisterForm.email.value;
    var pass1 = document.RegisterForm.pass1.value;
    var pass2 = document.RegisterForm.pass2.value;
    var gender = document.RegisterForm.Gender.value;
    var Language = document.RegisterForm.chk1.value;


    // console.log(fname);
    // console.log(lname);
    // console.log(age);
    // console.log(email);
    // console.log(pass1);
    // console.log(pass2);
    // // console.log(gender);
    // // console.log(Language);
    // return false;

    var nameregEX = /^[a-zA-Z\ ]+$/
    var emailregEX = /^[a-z0-9\.\_]+@[a-z]+\.[a-z]+$/
    var contactregEx = /^([6-9]+[0-9]{9})+$/
    var ageregEX = /^(1[89]|[2-9]\d)$/

    if (fname == "" || lname == "" || age == "" || email == "" || pass1 == "" || pass2 == ""){
        // name check

        if (fname == ""){
            document.getElementById("fnamemsg").innerHTML = ' First Name is Empty';
            document.getElementById("fnamemsg").style.color = 'red';
            return false;
        }
        else{
            document.getElementById("fnamemsg").innerHTML = '';    
        }

        if (lname == ""){
            document.getElementById("lnamemsg").innerHTML = ' Last Name is Empty';
            document.getElementById("lnamemsg").style.color = 'red';
            return false;
        }

        else{
            document.getElementById("lnamemsg").innerHTML = '';
            
        }

        // age check

        if(age == ""){
            document.getElementById("agemsg").innerHTML = "Age is Empty";
            document.getElementById("agemsg").style.color = 'red';
            return false;
        }
        else{
            document.getElementById("agemsg").innerHTML = ""; 
        }
        // check email
        if (email == ""){
            document.getElementById("emailmsg").innerHTML = 'Email Id is Empty';
            document.getElementById("emailmsg").style.color = 'red';
            return false
        }
        else{
            document.getElementById("emailmsg").innerHTML = '';
        }
        // password check
        if (pass1 == ""){
            document.getElementById("pass1msg").innerHTML = 'Password is Empty';
            document.getElementById("pass1msg").style.color = 'red';
        }
        else{
            document.getElementById("pass1msg").innerHTML = '';
        }
        

        if (pass2 == ""){
            document.getElementById("pass2msg").innerHTML = ' Confirm Password is Empty';
            document.getElementById("pass2msg").style.color = 'red';
        }
        else{
            document.getElementById("pass2msg").innerHTML = '';
        }

    }
    
    // regexname check
    else if (!nameregEX.test(fname)){

        // console.log("inside name condition")
        document.getElementById("fnamemsg").innerHTML = 'Inavlid Names Entered';
        document.getElementById("fnamemsg").style.color = 'red';
        return false;
    }

    else if (!nameregEX.test(lname)){

        // console.log("inside name condition")
        document.getElementById("lnamemsg").innerHTML = 'Inavlid Names Entered';
        document.getElementById("lnamemsg").style.color = 'red';
        return false;
    }

    else if (!ageregEX.test(age)){
        document.getElementById("agemsg").innerHTML = 'Invalid Age Entered';
        document.getElementById("agemsg").style.color = 'red';
        return false;
    }
    
    else if (!emailregEX.test(email)){
        document.getElementById("emailmsg").innerHTML = "Invalid Email Id Entered";
        document.getElementById("emailmsg").style.color = 'red';
        return false;
    }
    else if (pass1 != pass2){
        document.getElementById("pass1msg").innerHTML = 'Password Dot Not Matched';
        document.getElementById("pass1msg").style.color = 'red';
        return false;
    }

    else{
        document.getElementById("pass1msg").innerHTML = '';

    }


}   

