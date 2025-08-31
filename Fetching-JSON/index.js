
fetch('item.json')
.then(data => data.json())
.then(products =>{
  const parent = document.getElementById("product-list");
   products.forEach(product=>{
      const child = document.createElement("div");
      child.classList.add("product");
      child.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
        <h2>${product.name}</h2>
        <p class="price">${product.price}</p>
        <button class="add-to-cart">Add to Cart</button>   
      `
      parent.appendChild(child);
      
   })
})