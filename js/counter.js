let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");
let increaseBtn = document.getElementById("increaseBtn");

decreaseBtn.addEventListener("click", function() {
	let cnt = document.querySelector(".count");
	cnt.textContent = Number(cnt.textContent) - 1;
	changeFontColor(cnt.textContent);
});

resetBtn.addEventListener("click", function() {
	let cnt = document.querySelector(".count");
	cnt.textContent = 0;
	changeFontColor(cnt.textContent);
});

increaseBtn.addEventListener("click", function() {
	let cnt = document.querySelector(".count");
	cnt.textContent = Number(cnt.textContent) + 1;
	changeFontColor(cnt.textContent);
})

const changeFontColor = (target) => {
	let count = document.querySelector(".count");
	clearFontColor(count);
	if (target < 0 ) {
		count.classList.add("font-minus");
	} else if (target > 0) {
		count.classList.add("font-plus");
	} else {
		count.classList.add("font-zero");
	}
}

const clearFontColor = (target) => {
	target.classList.remove("font-minus");
	target.classList.remove("font-plus");
	target.classList.remove("font-zero");
}