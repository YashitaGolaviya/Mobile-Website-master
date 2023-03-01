let x=document.getElementById('send_msg');
let validName=document.getElementById('validName');
let validEmail=document.getElementById('validEmail');
let validPhone=document.getElementById('validPhone');
let validMessage=document.getElementById('validMessage');

function func(){
    let name=document.getElementById('name').value;
    let email=document.getElementById('email').value;
    let phone_number=document.getElementById('phoneno').value;
    let alpha=/^[A-Za-z\s]*$/;
    let at_position = email.indexOf("@");
    let dot_position = email.lastIndexOf(".");
    let phone_regx = /^\d{10}$/;   
    if(name=='' || ! name.match(alpha)){
        validName.style.display = 'block';
    }
    else{
        validName.style.display = 'none';
    }
    if((at_position<1)||((dot_position-at_position)<2)){
        validEmail.style.display = 'block';
    }
    else{
        validEmail.style.display = 'none';
    }
    if(! phone_number.match(phone_regx)){
        validPhone.style.display = 'block';
    }
    else{
        validPhone.style.display = 'none';
    }
    if(!(validName.style.display == 'block' || validEmail.style.display == 'block' || validPhone.style.display == 'block' || validMessage.style.display == 'block'  )){

    }
}
