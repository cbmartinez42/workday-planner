let currentHour = moment().format('H');
let today = moment();

$(document).ready(function() {

    // show date and time in the jumbotron and update time continuously 
    $("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
    function updateTime(){
        $("#currentTime").text(moment().format("h:mm a"));
    }
    setInterval(updateTime, 1000); 

     // build planner, set colors according to past/present/future, and restore localstorage data if it exists
    initializePlanner();
    updateTextareaColor();
    restoreData();

    // save button eventlistener
    $('.saveBtn').click(function() {
        saveData(this.id)     
    });

    // delete button listener and function
    $('.delete-button').click(function() {
        localStorage.clear();
        location.reload();
    });
});

// save to localstorage
function saveData(btnId){
    let textareaId = "textarea" + btnId;
    let textarea = document.getElementById(textareaId);
    localStorage.setItem(btnId, textarea.value);
}

// Retrieve descriptions from localStorage and insert into document
function restoreData() {
    for(let i = 8; i < 18; i++) {
        var eventDescText = localStorage.getItem(i);
        var textareaId = "textarea" + i;
        var textarea = document.getElementById(textareaId);
        textarea.value = eventDescText;
    }
}

// initialize planner 
function initializePlanner() {

    for (var i = 8; i < 18; i++) {
        const plannerTime = moment(i, 'H').format('h a');
        const wrapper = $('<div>')
            .addClass('time-block row')
            .attr('id', 'h' + i + 'time')

        // div for the hour
        const hourDiv = $('<div>')
            .addClass('hour col-md-1')
            .text(plannerTime);
        wrapper.append(hourDiv);
 
        // textarea for activities
        const textArea = $('<textarea>')
            .addClass('description col-md-10')
            // id so that it can be added/called for localstorage
            .attr('id', 'textarea' + i);
        wrapper.append(textArea);

        // save button
        const saveButton = $('<button>')
            .addClass('saveBtn col-md-1')
            // id so that it can be linked to textarea for localstorage
            .attr('id', i)
            .attr('title', 'Save entry')
            .html("<i class='far fa-save'></i>");
        wrapper.append(saveButton);
  
        // append all items to the container
        $('.container').append(wrapper);
    }
}

// update colors based on past/present/future
function updateTextareaColor() {
    for(let i = 8; i < 18; i++ ) {
        let textareaId = "textarea" + i;
        let eventDesc = document.getElementById(textareaId);
        let eachHour = i;
        if( eachHour == currentHour ){
            eventDesc.classList.add('present');
        }else if( eachHour < currentHour ){
            eventDesc.classList.add('past');
        } else {
            $(eventDesc).addClass('future');
        }
    } 
}