// Write your JavaScript code here.
// Remember to pay attention to page loading!
let initialShuttleHeight = 0;

function changeFlightStatus(strStatus) {
	let flightStatus = document.getElementById("flightStatus");
	flightStatus.innerText = strStatus;
}

function changeFlightColor(color) {
	let shuttleBkg = document.getElementById("shuttleBackground");
	shuttleBkg.style.backgroundColor = color;
}

function changeFlightHeight(height) {
	let shuttleHeight = document.getElementById("spaceShuttleHeight");
	shuttleHeight.innerText = height;
}

let leftPos = -20;
let topPos = 250;

function resetPosition() {
	let rocket = document.getElementById("rocket");
	topPos = 250;
	rocket.style.top = topPos + "px";
	leftPos = -20;
	rocket.style.left = leftPos + "px";
}

window.addEventListener("load", function() {
	//code here
	let takeoffBtn = document.getElementById("takeoff");
	takeoffBtn.addEventListener("click", function() {
		if (window.confirm("Confirm that the shuttle is ready for takeoff.")) {
			changeFlightStatus("Shuttle in flight.");
			changeFlightColor("blue");
			initialShuttleHeight = 0;
			initialShuttleHeight += 10000;
			changeFlightHeight(initialShuttleHeight);
		}
	})

	let landBtn = document.getElementById("landing");
	landBtn.addEventListener("click", function() {
		window.alert("The shuttle is landing. Landing gear engaged.");
		changeFlightStatus("The shuttle has landed.");
		changeFlightColor("green");
		changeFlightHeight(0);
		resetPosition();
	})

	let abortBtn = document.getElementById("missionAbort");
	abortBtn.addEventListener("click", function() {
		if (window.confirm("Confirm that you want to abort the mission.")) {
			changeFlightStatus("Mission aborted.");
			changeFlightColor("green");
			changeFlightHeight(0);
			resetPosition();
		}
	})

	let leftBtn = document.getElementById("left");
	leftBtn.addEventListener("click", function() {
		let rocket = document.getElementById("rocket");
		leftPos -= 10;
		rocket.style.left = leftPos + "px";
	})
	let upBtn = document.getElementById("up");
	upBtn.addEventListener("click", function() {
		let rocket = document.getElementById("rocket");
		topPos -= 10;
		rocket.style.top = topPos + "px";
		initialShuttleHeight += 10000;
		changeFlightHeight(initialShuttleHeight);
	})
	let downBtn = document.getElementById("down");
	downBtn.addEventListener("click", function() {
		let rocket = document.getElementById("rocket");
		topPos += 10;
		rocket.style.top = topPos + "px";
		initialShuttleHeight -= 10000;
		changeFlightHeight(initialShuttleHeight);
	})
	let rightBtn = document.getElementById("right");
	rightBtn.addEventListener("click", function() {
		let rocket = document.getElementById("rocket");
		leftPos += 10;
		rocket.style.left = leftPos + "px";
	})
})