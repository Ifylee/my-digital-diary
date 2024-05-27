const formElement = document.querySelector("form");

const handleFormSubmit = function(event) {
    event.preventDefault();

    const username = document.querySelector("#username").value.trim();

    const title = document.querySelector("#title").value.trim();

    const content = document.querySelector("#content").value.trim();
}