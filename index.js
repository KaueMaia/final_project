const form = document.getElementById('mainForm');
const imgSelector = document.getElementById('img');
const imgg = document.getElementById('imgg');

let timeout;

imgSelector.onkeyup = () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        imgg.src = imgSelector.value;
    }, 1000);
};

imgg.onerror = () => {
    imgg.src = 'img/img_select.png';
};

form.onsubmit = e => {
    e.preventDefault();

    let carrinho = localStorage.getItem('carrinho') ? JSON.parse(localStorage.getItem('carrinho')) : [];

    carrinho.push({
        product: form.product.value,
        price: form.price.value,
        desc: form.desc.value,
        img: form.img.value,
    });

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    window.location = "compra.html";
};