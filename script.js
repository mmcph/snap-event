

document.getElementById("input").addEventListener("keypress", function(event) {
	var key = KeyboardEvent.keyCode;
	if (key === 13) {
		var ins="<li>Added via enter keypress</li>"
		document.querySelector("ul").insertAdjacentHTML('beforeend', ins);

	}
});
