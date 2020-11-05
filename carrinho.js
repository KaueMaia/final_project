const dados = JSON.parse(localStorage.getItem('carrinho'));

const taxa = Math.floor(Math.random() * (40 - 10 + 1) + 10)

document.getElementById('taxas_n').innerHTML = taxa

for (const product of dados) {
    document.getElementById('products').innerHTML += `
        <div class="cartProduct">
          <div class="flex">  
          <img class="productImg" src="${product.img}">
            <div class="productInfo">
              <span class="productName">
                ${product.product}
              </span>
              <p class="productDesc">
                ${product.desc}
              </p>
              <span class="productPrice"> $
                ${product.price}
              </span>
            </div>
          </div>
          <input type="number" min="1" value="1" class="inputUn font-pthin" placeholder="1 pcs" id="quantidade">
          
        </div>
  `;
}
const soma_total = dados.reduce((a, b) => a + Number(b.price), 0);

const total = soma_total + taxa;

document.getElementById('total').innerHTML = `$${total} `;

document.getElementById('subtotal').innerHTML = `$${soma_total}`;