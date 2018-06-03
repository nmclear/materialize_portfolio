$(document).ready(function(){

//========================================================================================================================
// MATERIALIZE JS CALLS
//========================================================================================================================
    //Show side Nav
    $('.sidenav').sidenav();
    //Nav dropdown trigger
    $('.dropdown-trigger').dropdown();
    //Autoresize text input box
    M.textareaAutoResize($('#contactMessage'));

//========================================================================================================================
// ON PAGE LOAD CALLS
//========================================================================================================================
    displayHomePage();


//========================================================================================================================
// NAVBAR CLICK LISTENERS
//========================================================================================================================
    $('.navHome').on('click', function(){
        slideUpAllContainers();
        $('#containerHome').slideDown();
    });

    $('.navAbout').on('click', function(){
        slideUpAllContainers();
        $('#containerAbout').slideDown();
    });

    $('.navEducation').on('click', function(){
        slideUpAllContainers();
        $('#containerEducation').slideDown();
    });

    $('.navProjects').on('click', function(){
        slideUpAllContainers();
        $('#containerProjects').slideDown();
    });

    $('.navHobbies').on('click', function(){
        slideUpAllContainers();
        $('#containerHobbies').slideDown();
    });

    $('.navContact').on('click', function(){
        slideUpAllContainers();
        $('#containerContact').slideDown();
    });

//========================================================================================================================
// FUNCTIONS
//========================================================================================================================

    function hideAllContainers() {
        $('#containerHome').hide();
        $('#containerAbout').hide();
        $('#containerEducation').hide();
        $('#containerProjects').hide();
        $('#containerHobbies').hide();
        $('#containerContact').hide();
    }

    function slideUpAllContainers() {
        $('#containerHome').slideUp();
        $('#containerAbout').slideUp();
        $('#containerEducation').slideUp();
        $('#containerProjects').slideUp();
        $('#containerHobbies').slideUp();
        $('#containerContact').slideUp();
    }

    function displayHomePage() {
        hideAllContainers();
        $('#containerHome').show();
        $("div.hidden").removeClass("hidden");
    }

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
    nextStringDelay: 2000,
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
}







}); //DOCUMENT END