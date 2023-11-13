/* 5. Changing DOM with closure 
@Description: code changes the web page to look according the 
Spooky, Dark Mode and Scream mode options */

function changeMode(size, weight, transform, background, color) {
    return function() {
        document.documentElement.style["font-size"] = size;
        document.documentElement.style["font-weight"] = weight;
        document.documentElement.style["text-transform"] = transform;
        document.documentElement.style["background-color"] = background;
        document.documentElement.style["color"] = color;
    } 
}

function main() {
    // arguments will pass to changeMode function 
    let spooky = changeMode("9", "bold", "uppercase", "pink", "green");
    let darkMode = changeMode("12", "bold", "capitalize", "black", "white");
    let screamMode = changeMode("12", "normal", "lowercase", "white", "black");

    // Adding text to the page
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "Welcome Holberton!"
    document.body.appendChild(paragraph);

    // Adding button -Spooky- and apply event
    let btnSpooky = document.createElement("button");
    btnSpooky.innerHTML = "Spooky";
    btnSpooky.onclick = function () {spooky();};
    document.body.appendChild(btnSpooky);

    // Adding button -Darkmode- and apply event
    let btnDark = document.createElement("button");
    btnDark.innerHTML = "Dark mode";
    btnDark.onclick = function () {darkMode();};
    document.body.appendChild(btnDark);

    // Adding button -ScreamMode- and apply event
    let btnScream = document.createElement("button");
    btnScream.innerHTML = "Scream mode";
    btnScream.onclick = function () {screamMode();};
    document.body.appendChild(btnScream);

}
main();