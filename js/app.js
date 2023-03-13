let index = 0;

const complateTodo = (index) => {
	let target = document.getElementById(`tx${index}`);
	target.classList.add("complate");
}

const cancelComplateTodo = (index) => {
	let target = document.getElementById(`tx${index}`);
	target.classList.remove("complate");
}

const careteCheckEvent = (checkBox, index) => {
	checkBox.addEventListener("change", function() {
		if (checkBox.checked) {
			complateTodo(index);
		} else {
			cancelComplateTodo(index);
		}
	});
}

const createTodo = (index) => {
	// 체크박스 생성
	const checkboxSpan = document.createElement("span");
	checkboxSpan.classList.add("_checkbox");
	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.id = `ck${index}`;
	careteCheckEvent(checkbox, index);
	const checkboxLabel = document.createElement("label");
	checkboxLabel.htmlFor = `ck${index}`;
	checkboxLabel.classList.add("check-box");
	checkboxSpan.appendChild(checkbox);
	checkboxSpan.appendChild(checkboxLabel);

	// 입력란 생성
	const inputSpan = document.createElement("span");
	inputSpan.classList.add("_list");
	const input = document.createElement("input");
	input.type = "text";
	input.id = `tx${index}`;
	input.classList.add("_input");
	const inputLabel = document.createElement("label");
	inputLabel.htmlFor = `tx${index}`;
	inputSpan.appendChild(input);
	inputSpan.appendChild(inputLabel);

	let body = document.getElementById("contents");
	body.appendChild(checkboxSpan);
	body.appendChild(inputSpan);

	input.addEventListener("keydown", function(event) {
		if (event.key === "Enter") {
			handleKeyPress();
		}
	});

	  function handleKeyPress() {
		index++;
		let addInput = createTodo(index);
		addInput.focus();
	}
	return input;
}

document.addEventListener('DOMContentLoaded', function() {
	let input = createTodo(0);
	input.focus();
});