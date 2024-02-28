const root = document.getElementById("root");
const h1 = document.createElement("h1");
h1.innerText = "DOM Manipulation by Rivansh";
root.style.width = "20vw";
root.style.height = "40vh";
root.style.color = "blue";
root.style.backgroundColor = "yellow";
root.style.margin = "20px";
root.style.padding = "10px"
h1.style.fontSize = "20px";
h1.style.margin = "10px";
h1.style.padding = "10px";
root.appendChild(h1);