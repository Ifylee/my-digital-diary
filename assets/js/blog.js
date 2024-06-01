const mainElement = document.querySelector("main");

// this function returns a newly created elements to the DOM.
// this function takes three parameters: the type of element created, the text content value and the parent of the newly created element.
const renderElement = function(type, text, parent) {
    const element = document.createElement("h2");
    element.textContent = "No blogs available yet";

    mainElement.appendChild(element);

    return element;
}
// this function provides flexibility in generating and adding elements to a webpage.
const handleEmpty = function(type, text, parent) {
    const element = document.createElement(type);
    element.textContent = text;
    parent.appendChild(element);
}

// this function gets the stored blog data
const renderBlogList = function() {
    const blogs = readBlogDataFromLocalStorage();

// checks for empty blogs, if trthy then the handleEmpty function is called.
    if(blogs.length === 0) {
        handleEmpty();

        return;
    }

// this loops through an array of blogs and creates HTML elements to represent each blog entry.
    for(let i = 0; i < blogs.length; i++) {

        // article element created to contain the blog content within it
        const article = document.createElement("article");

       // HTML elements being created here. 
       // <h2> for the blog title, 
        const h2 = document.createElement("h2");

       //<blockquote> for the content. 
        const blockquote = document.createElement("blockquote");

        // <p> for the author.
        const p = document.createElement("p");
        h2.textContent = blogs[i].title;
        
        //appending elements
        article.appendChild(h2);

        blockquote.textContent = blogs[i].content;
        article.appendChild(blockquote);

        p.textContent = `By: ${blogs[i].username}`;
        article.appendChild(p);

        // css class name of card added to the article element so it looks like a card.
        article.classList.add('card');

        // parent element
        mainElement.appendChild(article);    
    }
}

        renderBlogList();