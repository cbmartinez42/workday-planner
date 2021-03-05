// let myPlanner = document.getElementById('#myPlanner')



$(document).ready(function() {
    // show today's date in the jumbotron
    let today = moment();
    $("#currentDay").text(today.format("dddd, MMM Do, YYYY"));

    // show time in the jumbotron and update it
    let currentTime =  moment().format("h:mm a");
    $("#currentTime").text(time);

    function update(){
        $("#currentTime").text(moment().format("h:mm a"));
        }
    setInterval(update, 1000); // should this be every second, or less often to use less resources?

    initializePlanner()
    // // get localstorage if it exists or create blank planner

    // 	let planner = initializePlanner();

        // for (var time in planner) {
        // 	console.log(time, planner[time]);
        // 	let tr = $("<tr>")
        //         .addClass("row time-block");
        // 	let tdTime = $("<td>").addClass("hour").text(time);
        //         // allow user to click in the activity section to type an activity
        //     let tdActivity = $("<td>").addClass("textArea");
        // }

        // let thisTime;

    // save button eventlistener
    $('.far').click(function() {
        console.log('Save Button clicked!');
    });
    
});



// initialize planner 
function initializePlanner() {
// let starterPlanner = [];
let th1 = $('<th>')
    .text('Time');
let th2 = $('<th>')
.text('Activity');
let th3 = $('<th>')
.text('Save');
let tr = $("<tr>")
    // .addClass("row time-block");
$('#myPlanner').append(tr);
$('#myPlanner').append([th1, th2, th3]);

for (var i = 8; i < 18; i++) {
    const plannerTime = moment(i, 'H').format('h a');
    const textareaTime = moment(i, 'H').format('h');
    const div = $('<div>').addClass('saveBtn');
    const save = $("<i>").addClass("far fa-save");
    const activityHour = document.getElementsByClassName('activity-hour')
    const activityEl = document.getElementsByTagName('textarea')
    div.append(save)
    let tr = $("<tr>")
        // .addClass("row time-block");
    let col1 = $("<td>")
        .addClass("time-block hour")
        .text(plannerTime);
    let col2 = $("<td>")
        .append($("<textarea>"))
        .addClass(textareaTime);
    let col3 = $("<td>")
        .append(div)

    // change color when the time has elapsed
    if (moment(time, "h").isSame(moment(), plannerTime)) {
        $('textarea').addClass("present");
    } else if (moment(time, "h a").isAfter(moment())) {
        activityHour = "future";
    } else if (moment(time, "h a").isBefore(moment())) {
        activityHour = "past";
    }

        
    $(tr).append([col1, col2, col3])
    $('#myPlanner').append(tr);
}
}