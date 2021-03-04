$(document).ready(function() {
	const m = moment();
	$("#currentDay").html(moment().format("LL"));
	console.log(moment());
	console.log(m.format('LL'));
	
	// var todaysDate = $("#currentDay");
	// todaysDate.text(m.format('LL'));
	// const date = moment();

	var planner = JSON.parse(localStorage.getItem("planner")) || initializePlanner();
	console.log(planner);

	for (var time in planner) {
		console.log(time, planner[time]);
		var tr = $("<tr>")
			// .addClass("row time-block");
		var tdTime = $("<td>")
			.addClass("hour") // col-md-1
			.text(time);
		var tdEvent = $("<td>")
			.addClass("textArea");

		var thisTime;
		
		if (moment(time, "h a").isSame(moment(), "hour")) {
			thisTime = "present";
		} else if (moment(time, "h a").isAfter(moment())) {
			thisTime = "future";
		} else if (moment(time, "h a").isBefore(moment())) {
			thisTime = "past";
		}

		var eventText = $("<textarea>")
			.addClass("description") // col-md
			.addClass(thisTime)
			.attr("data-time", time)
			.val(planner[time]);
		tdEvent.append(eventText);
		// eventText.appentTo(tdEvent);

		var tdSubmit = $("<td>").addClass("saveBtn"); // col-md-1

		var icon = $("<i>").addClass("far fa-save fa-2x");

		tdSubmit.append(icon);
		// icon.appentTo(tdSubmit);

		tr.append(tdTime, tdEvent, tdSubmit);

		$("#myPlanner").append(tr);
		// tr.appentTo($("#myPlanner"));
	}

	function initializePlanner() {
		var tempPlanner = {};

		for (var i = 8; i < 18; i++) {
			// tempPlanner.moment(i, "H").format("h a") = "";
			tempPlanner[moment(i, "H").format("h a")] = "";
		}
		// tempplanner.appendTo($(".container"));
		return tempPlanner;
	}

	$(".saveBtn").on("click", function() {
		$(this).css("color", "#06AE");
		var time = $(this)
			.parent()
			.find(".description")
			.attr("data-time");
		var text = $(this)
			.parent()
			.find(".description")
			.val();
		console.log(time, text);

		planner[time] = text;

		localStorage.setItem("planner", JSON.stringify(planner));
	});
});