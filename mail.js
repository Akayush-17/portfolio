const firebaseConfig = {
    apiKey: "AIzaSyAaZ66T5PnWgKW85cXmDM-kZtEMYaPSta0",
    authDomain: "contactform-a08e4.firebaseapp.com",
    databaseURL: "https://contactform-a08e4-default-rtdb.firebaseio.com",
    projectId: "contactform-a08e4",
    storageBucket: "contactform-a08e4.appspot.com",
    messagingSenderId: "388203454946",
    appId: "1:388203454946:web:fe7890771ba905e4a4d9bb",
    measurementId: "G-1B2T9F519L"
  };

firebase.initializeApp(firebaseConfig);


var contactFormDB = firebase.database().ref("contactForm");

document.getElementById('conatct-form').addEventListener("submit" , submitForm)

function submitForm(e){
    e.preventDefault();

    var name=getElementval("name");
    var subject=getElementval("subject");
    var emailid =getElementval("email");
    var message =getElementval("message");

    saveMessages(name, subject, emailid, message);

    document.querySelector('.alert').style.display="block";

    setTimeout(()=>{
        document.querySelector('.alert').style.display="none";

    },2000);


}

const saveMessages =(name, subject,  emailid, message) =>{
    var newContactForm =contactFormDB.push();

    newContactForm.set({
        name: name,
        subject: subject,
        emailid: emailid,
        message:message,
    });

    document.getElementById('conatct-form').reset();
      
};


const getElementval =(id) => {
    return document.getElementById(id).value;
};