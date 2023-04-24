// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

window.addEventListener(`resize`, function() {
	let links = document.querySelector(".links");
	links.style.display = document.querySelector(".nav-toggle").style.display === "none" ? "none" : "";

});