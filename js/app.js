const input = document.getElementById("input");
const list = document.getElementById("list");

// added form submit event listener
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
	event.preventDefault();
	const task = input.value.trim();
	if (task !== '') {
		addTask(task);
		input.value = '';
	} else {
		showError('Please enter a task');
	}
});

// function to show error message
function showError(message) {
	const error = document.createElement('div');
	error.id = 'error';
	error.innerText = message;
	form.insertBefore(error, input.nextSibling);
	setTimeout(() => {
		error.remove();
	}, 3000);
}

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

	// added animation classes to move up and down
	item.classList.add('move-up');
	setTimeout(() => {
		item.classList.remove('move-up');
		item.classList.add('move-down');
	}, 100);
	setTimeout(() => {
		item.classList.remove('move-down');
	}, 400);

	item.addEventListener("click", () => {
		item.classList.toggle("done");
	});
}

function removeTask(item) {
	// added animation classes to move up and down
	item.classList.add('move-up');
	setTimeout(() => {
		item.classList.remove('move-up');
		item.classList.add('move-down');
	}, 100);
	setTimeout(() => {
		item.classList.remove('move-down');
		item.remove();
	}, 400);
}