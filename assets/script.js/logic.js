const themeButton = document.querySelector(".toggle");

function readingMode() {
    const mode = localStorage.getItem("mode") || "dark";

    return mode;
};

const readBlogDataFromLocalStorage = function() {
    const stringData = localStorage.getItem("blog");

    const data = JSON.parse(stringData);

    return data || [];
};

const applyMode = function(mode) {
    let icon, circleColor;

    if(mode === "light") {
        icon = "☀️"; 
        circleColor = "#ffb100";

    } else {
    icon = "🌙";
    circleColor = "#8570a5";
    }
} 
