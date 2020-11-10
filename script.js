const listCont = document.querySelector(".book-list-cont ul");
const addBook = document.querySelector(".add-book-cont #add");
const addBtn = document.querySelector(".add-book-cont .add-button");
const search = document.querySelector("#search");

listCont.addEventListener("click", function (e) {
	if (e.target.className === "delete") {
		listCont.removeChild(e.target.parentNode);
	}
});

addBtn.addEventListener("click", function (e) {
	e.preventDefault();
	if (addBook.value != "") {
		const li = document.createElement("li");
		const bookName = document.createElement("span");
		const delBtn = document.createElement("span");

		bookName.innerText = addBook.value;
		delBtn.innerText = "delete";

		bookName.classList.add("book-name");
		delBtn.classList.add("delete");

		li.appendChild(bookName);
		li.appendChild(delBtn);
		listCont.appendChild(li);

		addBook.value = "";
	}
});

search.addEventListener("keyup", function (e) {
	const list = document.getElementsByTagName("li");
	const ip = e.target.value.toLowerCase();
	Array.from(list).forEach((curr) => {
		const title = curr.firstElementChild.innerText.toLowerCase();
		if (title.includes(ip)) {
			curr.style.display = "flex";
		} else {
			curr.style.display = "none";
		}
	});
});

search.parentNode.addEventListener("submit", function (e) {
	e.preventDefault();
});
