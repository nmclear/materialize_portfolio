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
    //collapsible list
    $('.collapsible').collapsible();

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
// TYPE WRITER ANIMATION
//========================================================================================================================


var instance = new TypeIt('.headerTag', {
    strings: ['Full-Stack Developer.', 'Brewing up web applications.'],
    nextStringDelay: 2000,
    cursor: false,
    breakLines: false,
    loop: true
});









}); //DOCUMENT END