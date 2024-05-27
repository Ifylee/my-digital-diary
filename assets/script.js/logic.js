const themeButton = document.querySelector(".toggle");

function readingMode() {
    const mode = localStorage.getItem("mode") || "dark";

    return mode;
};

const readBlogDataFromLocalStorage = function() {
    const stringData = localStorage.getItem("blog");

    const data = JSON.parse(stringData);

    return data || [];
}