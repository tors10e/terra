function controlModal(modal_id, action){
//    Availble actions are show/hide.
    $('#'+modal_id).modal(action);
}

function sendMail()
{
    var emailAddress = form.elements['emailAddress'];
    var yourMessage = 'Test message';
    var subject = "Test subject"
    document.location.href = "mailto:"+emailAddress+"?subject="
        + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(yourMessage);
}

$(document).ready(function(){
    const form = document.getElementById('email-form');
    form.addEventListener('submit', sendMail);
});