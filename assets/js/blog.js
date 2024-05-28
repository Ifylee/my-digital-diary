const mainElement = document.querySelector("main");

const renderElement = function(type, text,parent) {
    const element = document.createElement("h2");
    element.textContent = "No blogs available yet";

    mainElement.appendChild(element);

    return element;
}

const handleEmpty = function() {
    const element = document.createElement(type);
    element.textContent = text;
    parent.appendChild(element);
}

const renderBlogList = function() {
    const blogs = readBlogDataFromLocalStorage();

    if(blogs.length === 0) {
        handleEmpty();

        return;
    }

    for(let i = 0; i < blogs.length; i++) {
        const article = document.createElement("article");

        const h2 = document.createElement("h2");
        const blockquote = document.createElement("blockquote");
        const p = document.createElement("p");
        h2.textContent = blogs[i].title;

        article.appendChild(h2);

        blockquote.textContent = blogs[i].content;
        article.appendChild(blockquote);

        p.textContent = `By: ${blogs[i].username}`;
        article.appendChild(p);
        article.classList.add('card');

        mainElement.appendChild(article);    
    }
}

        renderBlogList();