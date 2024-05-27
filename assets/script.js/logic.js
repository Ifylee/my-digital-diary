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

    themeButton.textContent = icon;
    document.body.classList = mode;
    document.documentElement.style.setProperty("#ffb100", circleColor);
} 

const saveMode = function(mode) {
    localStorage.setItem("mode", mode);
}
