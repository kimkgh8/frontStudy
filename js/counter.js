let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");

decreaseBtn.addEventListener("click", function() {
	let cnt = document.querySelector(".count");
	cnt.textContent = Number(cnt.textContent) - 1;
});

resetBtn.addEventListener("click", function() {
	let cnt = document.querySelector(".count");
	cnt.textContent = 0;
});

increaseBtn.addEventListener("click", function() {
	let cnt = document.querySelector(".count");
	cnt.textContent = Number(cnt.textContent) + 1;
})
