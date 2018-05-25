$(document).ready(function(){

    //Show side Nav
    $('.sidenav').sidenav();

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
//
//========================================================================================================================

























});