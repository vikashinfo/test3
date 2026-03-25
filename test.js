console.log("hello");

const products = document.getElementById("produt");

async function prodeuts() {
  try {
    const respose = await fetch("test.json");
    const data = await respose.json();
    console.log(data);

    data.products.forEach((item) => {
      data.categories.forEach((item) => console.log(item));
      const cards = document.createElement("div");
      cards.classList.add = "card";
      cards.innerHTML += `

      
        <div class="card">
              <img src="${item.imageUrl}" class="card-img-top" alt="imgde">
              <div class"card-text>


              <p class="title"> rating: ${item.rating}</p>
              <p class="brand"> brand: ${item.brand}</p>
              <p class="category"> Category: ${item.category}</p>
              <p class="subcat">${item.subcategory}</p>
              

              <h4 class="price"> Prie: ${item.price}</h4>
              <p>${item.description}</p>
              <div class="btn">
               <a href="product.html?id=${item.id}" class="btn">view</a>
               </div>
               
       </div>
        </div>
    
    `;
      products.appendChild(cards);
    });
  } catch (error) {
    console.log(error);
  }
}
prodeuts();
