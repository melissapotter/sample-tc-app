 /* global $ */
var container = $('div.container');
var empID = document.forms["empIdForm"]["empid"].value;

$('input#get').click(function(){
    $.ajax({
        type: 'GET',
        url: 'https://careerdevs18-melissapotter.c9users.io/empinfo',
        dataType: 'json', 
        success: function(data){
            $.each(data, function(index, item){
                $.each(item, function(key, value) {
                    container.append(key + ': ' + value + '</br>');
                });
                container.append('<br/></br>');
            });
        }
    });
});




