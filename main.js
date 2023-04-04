// get input element from the DOM
const input = document.querySelector("#input");
// get list items from the DOM
const lists = document.querySelector("#lists");
// clear button
const clearButton = document.getElementById("clear_button");
// number of items in todo list
const countElement = document.querySelector("#count");

let listItems = 0;

// add a keyup event listener to the input element
input.addEventListener("keyup", (e) => {
  // to make sure the user pressed the enter key
  if (e.key == "Enter") {
    // Get the value of the input element
    if (e.target.value.trim()) {
      // create a list item element dynamically
      const li = document.createElement("li");
      // add the html content to the list item element
      li.innerHTML = `<span>${e.target.value.trim()}</span> <i class="fas fa-trash delete" id=${Math.random().toString(
        36
      )}></i>`;
      // add a class attribute to the list item element
      li.setAttribute("class", "list-item");
      // append the list item element to the lists element
      lists.appendChild(li);
      // save to local storage
      saveToLocalStorage(e.target.value.trim());
      // clear the input value
      input.value = "";
      listItems++;
      countElement.textContent = listItems;
    }
  }
});

lists.addEventListener("click", (e) => {
  if (e.target.tagName == "I") {
    const items = lists.children;
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      if (element.lastElementChild.id === e.target.id) {
        element.remove();
        listItems--;
        countElement.textContent = listItems;
        break;
      }
    }
  }
});

clearButton.addEventListener("click", (e) => {
  lists.innerHTML = "";
  listItems = 0;
  countElement.textContent = listItems;
  localStorage.removeItem("listitems");
});

function saveToLocalStorage(item) {
  const ls = localStorage.getItem("listitems");
  if (ls) {
    // append to local storage
    const { count, items } = JSON.parse(ls);
    localStorage.setItem(
      "listitems",
      JSON.stringify({ count: count + 1, items: [...items, item] })
    );
  } else {
    // add to local storage
    localStorage.setItem(
      "listitems",
      JSON.stringify({ count: 1, items: [item] })
    );
  }
}

(() => {
  const todos = localStorage.getItem("listitems");
  if (todos) {
    const { count, items } = JSON.parse(todos);
    let str = "";
    for (let i = 0; i < count; i++) {
      str += `<li><span>${
        items[i]
      }</span> <i class="fas fa-trash delete" id=${Math.random().toString(
        36
      )}></i></li>`;
    }
    lists.innerHTML = str;
    listItems = count;
    countElement.textContent = count;
  }
})();
