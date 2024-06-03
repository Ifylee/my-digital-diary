const formEl = document.querySelector("form");

// redirects user to the blog.html page
const redirectPage = function() {
    location.href = "./blog.html";
}

// targets blog data from the localStorage, parses it from JSON and returns it either as data or empty array if there's nothing inside.
const dataFromLocalStorage = function() {
    const stringData = localStorage.getItem("blogs");

    const data = JSON.parse(stringData);

    return data || [];
};

// stores a new blog data to the localStorage
const storedDataLocalStorage = function(data) {

    // reads existing data from local storage
    const blogs = dataFromLocalStorage(); 

    // pushes the new data into the blogs array.
    blogs.push(data);

    // converts the updated blogs into a JSON string
    const stringData = JSON.stringify(blogs);
    
    // stores the JSON string back inthe localStorage with the key "blogs" and the value of stringData.
    localStorage.setItem("blogs", stringData);
};

// prevents the form from refreshing
const handleFormSubmit = function(event) {
    event.preventDefault();

// the trim removes the whitespace from both ends of the string of the input.
    const username = document.querySelector("#username").value.trim();

    const title = document.querySelector("#title").value.trim();

    const content = document.querySelector("#content").value.trim();

// ensures that all the feilds are filled
    if(!username || !title || !content) {
        const errorElement = document.querySelector("#error");
        errorElement.textContent = "Please fill in all the fields";

// sets time to clear the error message to 3 seconds.
        setTimeout(() => {
            errorElement.textContent = " ";
        }, 3000);

        return;
    }
// formData object created with the variables for better organization for further processing.
        const formData = {
            username: username,
            title: title,
            content: content

        };
        // stores the fomData values in the localStorage which is easy to retireve as a result of the storeBlogDataLocalStorage function.
        storedDataLocalStorage(formData);

        redirectPage();
}
// when the submit button located inside of formElement is clicked, the handleFormSubmit function runs
        formEl.addEventListener("submit", handleFormSubmit)