let product = document.querySelectorAll('.product'),
    countProduct = document.querySelectorAll('.product .product__quantity-value'),
    products = document.querySelector('.cart__products'),
    currentElement, firstWork = true;
// document.querySelectorAll('.product')[i].dataset.id
// document.querySelectorAll('.product img')[i].src
// document.querySelectorAll('.product .product__quantity-value')[i].innerText
// document.querySelectorAll('.product .product__quantity-control_inc')[i]
// document.querySelectorAll('.product .product__quantity-control_dec')[i]
// document.querySelectorAll('.product .product__add')[i]

// document.querySelectorAll('.cart__products')[0].innerHTML += `
//   <div class="cart__product" data-id="${document.querySelectorAll('.product')[productCount].dataset.id}">
//     <img class="cart__product-image" src="${document.querySelectorAll('.product img')[productCount].src}">
//     <div class="cart__product-count">${document.querySelectorAll('.product .product__quantity-value')[productCount].innerText}</div>
//   </div>
// `;

for (let i = 0; i < (product.length); i++) {
  document.querySelectorAll('.product .product__quantity-control_inc')[i].addEventListener('click', () => {
    if(countProduct[i].innerText < 99) {
      countProduct[i].innerText = parseInt(countProduct[i].innerText) + 1;
    }
  });
  document.querySelectorAll('.product .product__quantity-control_dec')[i].addEventListener('click', () => {
    if(countProduct[i].innerText > 0) {
      countProduct[i].innerText = parseInt(countProduct[i].innerText) - 1;
    }
  });
  document.querySelectorAll('.product .product__add')[i].addEventListener('click', () => {
    if(firstWork) {
      products.innerHTML += `
        <div class="cart__product" data-id="${product[i].dataset.id}">
          <img class="cart__product-image" src="${document.querySelectorAll('.product img')[i].src}">
          <div class="cart__product-count">${document.querySelectorAll('.product .product__quantity-value')[i].innerText}</div>
        </div>
      `;
      firstWork = false;
    } else {
      function counted() {
        for (var count = 0; count < products.childElementCount; count++) {
          if(products.children[count].dataset.id == product[i].dataset.id) {
            document.querySelectorAll('.cart__product-count')[count].innerText = parseInt(document.querySelectorAll('.cart__product-count')[count].innerText) + parseInt(document.querySelectorAll('.product .product__quantity-value')[i].innerText);
            return false;
          }
        }
        return true;
      }
      if(counted()) {
        products.innerHTML += `
          <div class="cart__product" data-id="${document.querySelectorAll('.product')[i].dataset.id}">
            <img class="cart__product-image" src="${document.querySelectorAll('.product img')[i].src}">
            <div class="cart__product-count">${document.querySelectorAll('.product .product__quantity-value')[i].innerText}</div>
          </div>
        `;
      }
    }
  });
}
