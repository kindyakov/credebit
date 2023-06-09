let containerEl = document.querySelector('#cards-list');
let mixer = mixitup(containerEl, {
    classNames: {
        block: ""
    }
});

let productList = document.querySelectorAll('.products__list');
let productTitle = document.querySelectorAll('.product__title');
let btnProducts = document.querySelectorAll('.products__filter-btn');

btnProducts.forEach(function(item) {
  item.addEventListener('click', function() {
    if (item.getAttribute('data-filter') === 'all') {
      productTitle.forEach(function(item) {
        item.classList.remove('none');
        setTimeout(() => item.style.display = 'block', 300);
        productList.forEach(function(item) {
          item.style.marginBottom = '4.5rem';
        })
      })
    } else {
      productTitle.forEach(function(item) {
        item.classList.add('none');
        setTimeout(() => item.style.display = 'none', 300);
        productList.forEach(function(item) {
          item.style.marginBottom = 0;
        })
      })
    }
  })
})