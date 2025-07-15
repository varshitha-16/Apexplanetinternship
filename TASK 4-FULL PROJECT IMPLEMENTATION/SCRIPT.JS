const products = [
  { name: 'Smartphone', category: 'electronics', price: 299, rating: 4.5 },
  { name: 'T-shirt', category: 'clothing', price: 25, rating: 4.0 },
  { name: 'Laptop', category: 'electronics', price: 999, rating: 4.8 },
  { name: 'chair', category: 'furniture', price: 45, rating: 3.9 },
  { name: 'Book: Datastructure', category: 'books', price: 30, rating: 4.2 },
  { name: 'Headphones', category: 'electronics', price: 79, rating: 4.1 },
];

const productList = document.getElementById('productList');
const categoryFilter = document.getElementById('categoryFilter');
const priceFilter = document.getElementById('priceFilter');
const sortSelect = document.getElementById('sortSelect');

function displayProducts(productsToDisplay) {
  productList.innerHTML = '';
  productsToDisplay.forEach(product => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Category: ${product.category}</p>
      <p>Price: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    productList.appendChild(div);
  });
}

function filterAndSortProducts() {
  const category = categoryFilter.value;
  const price = priceFilter.value;
  const sortBy = sortSelect.value;

  let filtered = products.filter(product => {
    const matchesCategory = category === 'all' || product.category === category;

    const [minPrice, maxPrice] = price === 'all' ? [0, Infinity] :
      price.split('-').map(Number);

    const matchesPrice = product.price >= minPrice && product.price <= (maxPrice || Infinity);

    return matchesCategory && matchesPrice;
  });

  if (sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  displayProducts(filtered);
}

categoryFilter.addEventListener('change', filterAndSortProducts);
priceFilter.addEventListener('change', filterAndSortProducts);
sortSelect.addEventListener('change', filterAndSortProducts);


displayProducts(products);
