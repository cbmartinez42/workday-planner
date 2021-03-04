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

	// 	// change color when the time has elapsed
    // if (moment(time, "h a").isSame(moment(), "hour")) {
    //     thisTime = "present";
    // } else if (moment(time, "h a").isAfter(moment())) {
    //     thisTime = "future";
    // } else if (moment(time, "h a").isBefore(moment())) {
    //     thisTime = "past";
    // }


// save button

});

// initialize planner 
function initializePlanner() {
    let starterPlanner = {};

    for (var i = 8; i < 18; i++) {
        starterPlanner[moment(i, 'H').format('h a')] = '';
        let tr = $("<tr>")
            .addClass("row time-block");
        let tdTime = $("<td>")
            .addClass("hour")
            .text(JSON.stringify(time));
        // allow user to click in the activity section to type an activity
        let tdActivity = $("<td>")
            .addClass("textArea");
        $('#myPlanner').append(tr);
        $('.row').append(tdTime);
        $('.row').append(tdActivity);  
    }
    console.log(starterPlanner);
    return starterPlanner;
}