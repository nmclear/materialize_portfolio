$(document).ready(function(){

//========================================================================================================================
// MATERIALIZE JS CALLS
//========================================================================================================================
    //Show side Nav
    $('.sidenav').sidenav();
    //Autoresize text input box
    M.textareaAutoResize($('#contactMessage'));

//========================================================================================================================
// ON PAGE LOAD CALLS
//========================================================================================================================
//on page load, show HomePage, hide all others
    $('#containerHome').show();
    $('#containerAbout').hide();
    $('#containerEducation').hide();
    $('#containerProjects').hide();
    $('#containerHobbies').hide();
    $('#containerContact').hide();

//========================================================================================================================
// NAVBAR CLICK LISTENERS
//========================================================================================================================
    $('#navHome').on('click', function(){
        $('#containerHome').show();
        $('#containerAbout').hide();
        $('#containerEducation').hide();
        $('#containerProjects').hide();
        $('#containerHobbies').hide();
        $('#containerContact').hide();
    });

    $('#navAbout').on('click', function(){
        $('#containerHome').hide();
        $('#containerAbout').show();
        $('#containerEducation').hide();
        $('#containerProjects').hide();
        $('#containerHobbies').hide();
        $('#containerContact').hide();
    });

    $('#navEducation').on('click', function(){
        $('#containerHome').hide();
        $('#containerAbout').hide();
        $('#containerEducation').show();
        $('#containerProjects').hide();
        $('#containerHobbies').hide();
        $('#containerContact').hide();
    });

    $('#navProjects').on('click', function(){
        $('#containerHome').hide();
        $('#containerAbout').hide();
        $('#containerEducation').hide();
        $('#containerProjects').show();
        $('#containerHobbies').hide();
        $('#containerContact').hide();
    });

    $('#navHobbies').on('click', function(){
        $('#containerHome').hide();
        $('#containerAbout').hide();
        $('#containerEducation').hide();
        $('#containerProjects').hide();
        $('#containerHobbies').show();
        $('#containerContact').hide();
    });

    $('#navContact').on('click', function(){
        $('#containerHome').hide();
        $('#containerAbout').hide();
        $('#containerEducation').hide();
        $('#containerProjects').hide();
        $('#containerHobbies').hide();
        $('#containerContact').show();
    });



//========================================================================================================================
// FIREBASE
//========================================================================================================================
  // Initialize Firebase
    var config = {
        apiKey: "AIzaSyC9QrfmjqaHdJTy73WTLUUxEi3voCF1GvU",
        authDomain: "portfolio-fb684.firebaseapp.com",
        databaseURL: "https://portfolio-fb684.firebaseio.com",
        projectId: "portfolio-fb684",
        storageBucket: "",
        messagingSenderId: "29324912075"
    };
    firebase.initializeApp(config);
    // Create a variable to reference the database
    var database = firebase.database();


//========================================================================================================================
// TYPE WRITER ANIMATION
//========================================================================================================================


var instance = new TypeIt('.headerTag', {
    strings: ['Full-Stack Developer.', 'Brewing up web applications.'],
    nextStringDelay: 2500,
    cursor: false,
    breakLines: false,
    loop: true
});

//========================================================================================================================
// CONTACT FORM
//========================================================================================================================

$('#contactFormSubmitBtn').on('click', function() {
    event.preventDefault();

    getContactInputValues();

    console.log($('#first_name').val());
    console.log($('#last_name').val());
    console.log($('#email').val());
    console.log($('#contactMessage').val());

    clearContactInputValues();
});


function clearContactInputValues() {
    $('#first_name').val('');
    $('#last_name').val('');
    $('#email').val('');
    $('#contactMessage').val('');
}

function getContactInputValues() {
    //GET INPUTS
    var firstName = $('#first_name').val().trim();
    var lastName = $('#last_name').val().trim();
    var email = $('#email').val().trim();
    var message = $('#contactMessage').val().trim();

    var newContactFormMessage = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message
    }

    database.ref().push(newContactFormMessage);


    // SET VALUES
    // $('#first_name').val(firstName);
    // $('#last_name').val(lastName);
    // $('#email').val(email);
    // $('#contactMessage').val(message);
}







}); //DOCUMENT END