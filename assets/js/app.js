$(document).ready(function(){

    //Show side Nav
    $('.sidenav').sidenav();

    
//on page load, show HomePage, hide all others
    $('#containerHome').show();
    $('#containerAbout').hide();
    $('#containerEducation').hide();
    $('#containerProjects').hide();
    $('#containerHobbies').hide();
    $('#containerContact').hide();

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

























});