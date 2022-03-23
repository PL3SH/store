var products = [
  {
    img: "https://www.dhresource.com/0x0/f2/albu/g10/M00/2D/E1/rBVaWVv-ZfOASEJRAABYYL8cNLI680.jpg",
    title: "t-shirt dragons edition size x/s",
    description: "black t-shirt with oriental dragon design .",
    linkP:"http://127.0.0.1:5500/projects/learning_prog/class/platzi/index_general.html#",
    linkG: "https://www.google.com",
  },{ img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/iffley-road-camiseta-1624011925.jpg?crop=1xw:1xh;center,top&resize=480:*", title: "polo", description: "white polo shirt with two stripes of blue and red colors .", linkP: "http://127.0.0.1:5500/projects/learning_prog/class/platzi/index_general.html#", linkG: "https://www.google.com" },
      { img: "https://http2.mlstatic.com/D_NQ_NP_664936-MCO44082934245_112020-W.jpg", title: "Dragon ball style", description: " white t-shirt with goku-dragon ball design.", linkP: "http://127.0.0.1:5500/projects/learning_prog/class/platzi/index_general.html#", linkG: "https://www.google.com" },
      { img: "https://cf.shopee.com.mx/file/5c2976494ab02d6585adb7c83ccb6c4b", title: "Monkey D luffy t-shirt", description: " black t-shirt with one piece design", linkP: "http://127.0.0.1:5500/projects/learning_prog/class/platzi/index_general.html#", linkG: "https://www.google.com" },
      { img: "https://http2.mlstatic.com/D_NQ_NP_943050-MCO45554622197_042021-W.jpg", title: "Adidas t-shirt", description: " white adidas t-shirt", linkP: "http://127.0.0.1:5500/projects/learning_prog/class/platzi/index_general.html#", linkG: "https://www.google.com" },
      { img: "https://m.media-amazon.com/images/I/31ynIdSrUYL._AC_.jpg", title: "Rose t-shirt", description: " rose t-shirt", linkP: "http://127.0.0.1:5500/projects/learning_prog/class/platzi/index_general.html#", linkG: "https://www.google.com" },
];
//this function create the HTML code to  the card
function createCard(product, parent) {
  var col = document.createElement("div");
  col.classList.add("col");

  var card = document.createElement("div");
  card.classList.add("card");
  card.style.width = "18rem";

  let img = document.createElement("img");
  img.src = product.img;
  img.alt = "..."
console.log(img)
  img.appendChild(card);
  let cardBody1 = document.createElement("div");
  cardBody1.classList.add("card-body");
//titulo del texto
  let cardTitle = document.createElement("h5");
  cardTitle.classList.add("card-title");
  cardTitle.innerText = product.title;
  let cardBody2 = document.createElement("div");
  cardBody2.classList.add("card-body");
  //descripcion del producto
  let cardDescription = document.createElement("p")
  cardDescription.innerText = product.description;
  
  console.log(products.description)
  //agregarlo al card
  let link1 = document.createElement("a");
  link1.href = product.linkP;
  link1.textContent = "click aqui"
 

  let link2 = document.createElement("a");
  link1.href = product.linkG;
  link2.textContent = "google"
 
  console.log(); // valido si queo creada la card
  //anidaciones
  parent.appendChild(col);
  col.appendChild(card);
  card.appendChild(img)
  console.log(cardBody1)
  card.appendChild(cardBody1); //agregarlo al card
  cardBody1.appendChild(cardTitle);
  card.appendChild(cardBody2);
  cardBody2.appendChild(cardDescription)
  cardBody2.appendChild(link1);
  cardBody2.appendChild(link2);
}
function createRows(numberProducts, itemsPerRow) {
  let numbreOfRows = Math.ceil(numberProducts / itemsPerRow);
  let rows = [];
  for (let i = 1; i <= numbreOfRows; i++) {
    let row = document.createElement("div");
    row.id = `row-${i}`;
    row.classList.add('row');
    rows.push(row);
  }
  return rows;
}
//the function shows the products and iterate in the array of objects to put in the HTML
function showProducts(products, numbreOfRows){
  let m4 = document.querySelector(".products.m-4");
  let rows = createRows(products.length, numbreOfRows);

  // add rows to produtcs div
  rows.forEach(function(row){
    m4.appendChild(row);
  })
//counts the amount of rows and  iterate on the object and if the amount of the col is 3 do this function
  let rowCount = 0;
  let parent = rows[rowCount];
  products.forEach(function(product){
    if (parent.querySelectorAll(".col").length === numbreOfRows){
      rowCount += 1;
      parent = rows[rowCount];
    }

    createCard(product, parent)
  })
}
showProducts(products, 3)
console.log(rows)


// products.forEach(function (item) {
//   if(rows[i]){createcard(item);}
//   console.log(item);
// });
// createcard(products,rows)
