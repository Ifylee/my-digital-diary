const themeButton = document.querySelector(".toggle");

// this function retrieves the value of mode stored in the localStorage and saves it in a variable called readingMode.
const readingMode = function() {
    const mode = localStorage.getItem("mode") || "dark";

    return mode;
};

// this function sets different icons and colors based on the mode.
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

// saves the current mode in the localStorage whenever it changes
const saveMode = function(mode) {
    localStorage.setItem("mode", mode);
}

// this function toggles the value of mode between dark and light modes when called
const handleTheme = function() {
       const mode = readingMode();
    
    let newMode;

    if(mode === "light") {
      newMode = "dark";
    } else {
        newMode = "light";
    }
// this applies the new mode to the user interface
    applyMode(newMode);

 //this saves the new mode to the localStorage. 
    saveMode(newMode);
};
// this updates the system to reflect the current mode stored in localStorage.
applyMode(readingMode());

// once the icon which is the value of themeButton is clicked, the handleTheme function runs.
themeButton.addEventListener("click", handleTheme);

