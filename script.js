const container=document.createElement("div");
container.classList.add("container");

const row=document.createElement("div");
row.classList.add("row");

const col=document.createElement("div");
col.style.backgroundColor="red";
col.classList.add("col-md-6");

const heading=document.createElement("h2");
const headingText=document.createTextNode("this is heading");

const pera=document.createElement("p");
const peraText=document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dolor magni explicabo? Quos excepturi odio nihil voluptas, atque ipsa ex rerum velit beatae? Perferendis ratione voluptatum non inventore dolore pariatur necessitatibus soluta veniam odio dolor consequuntur cupiditate iure, qui ex animi natus cumque quis sint eius fuga rem maxime officiis.");

const link=document.createElement("a");
link.innerHTML="Apply now";
link.setAttribute("href","#");
link.classList.add("btn");
link.classList.add("btn-primary");


pera.appendChild(peraText);
heading.appendChild(headingText);
col.appendChild(heading);
col.appendChild(pera);
col.appendChild(link);
row.appendChild(col);
container.appendChild(row);


document.getElementById("root").append(container);