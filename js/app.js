const input = document.getElementById("input");
const list = document.getElementById("list");

input.addEventListener("keydown", (event) => {
	if (event.key === "Enter") {
		addTask(input.value);
		input.value = "";
	}
});

function addTask(task) {
	const item = document.createElement("li");
	item.innerText = task;

	const deleteButton = document.createElement("span");
	deleteButton.classList.add("delete");
	deleteButton.addEventListener("click", () => {
		removeTask(item);
	});

	item.appendChild(deleteButton);
	list.appendChild(item);

	setTimeout(() => {
		item.classList.add("fade");
	}, 0);

	item.addEventListener("transitionend", () => {
		item.classList.remove("fade");
	});

	item.addEventListener("click", () => {
		item.classList.toggle("done");
	});
}

function removeTask(item) {
	item.classList.add("fade");

	item.addEventListener("transitionend", () => {
		item.remove();
	});
}