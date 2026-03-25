const prsm = new URLSearchParams(window.location.search);
console.log(prsm);
const iddata = prsm.get("id");
console.log(iddata);

async function prasmprod() {
  try {
    const respse = await fetch("test.json");
    const dataid = await respse.json();
    console.log(dataid);

    const data = dataid.products.find((item) => item.id === Number(iddata));
    console.log(data);

    const category = dataid.categories.find(
      (categ) => categ.id === Number(iddata),
    );

    document.getElementById("test2").innerHTML = `

    <div class="card" >
    <img src="${data.imageUrl}" class="card-img-top" alt="imga">
    
    <div class=" card-body">

    <div class="text">
    <p> Quatiye: ${data.quantity}</p>
                          <p> category: ${data.category}</p>
                          
                                       

              <p class="brand"> brand- ${data.brand}</p>
              
             
              <h4 class="price"> price-${data.price}</h4>
              <p class="discout"> discount: ${data.discount}</p>
              <p class="stock"> stock: ${data.inStock}</p>
              <p class="subcategory"> subcategory: ${data.subcategory}</p>
                    <li > description: ${data.description}</li>
                    <p> Colors:${data.colors}</p>
             
    
    </div>
    
    </div>
<select class="select" >
      <option >show</option>

      <option > name: ${category.name}</option>
      <option > icon: ${category.icon}</option>
      <option> subcategory: ${category.subcategories}</option>
      



    </select>

    
    </div>
    
    
    
    
    `;
  } catch (error) {
    console.log(error);
  }
}
prasmprod();
