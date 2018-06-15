$(document).ready(function(){

//========================================================================================================================
// MATERIALIZE JS CALLS
//========================================================================================================================

    //Nav dropdown trigger
    $('.dropdown-trigger').dropdown();
    //collapsible list
    $('.collapsible').collapsible();
    //tooltip
    $('.tooltipped').tooltip();

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
        $('#containerHome, #containerAbout, #containerEducation, #containerProjects, #containerHobbies, #containerContact').hide();
    }

    function slideUpAllContainers() {
        $('#containerHome, #containerAbout, #containerEducation, #containerProjects, #containerHobbies, #containerContact').slideUp();
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