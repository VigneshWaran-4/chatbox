// Sample product data (you can replace this with your actual product data)
const products = [
    { name: 'Herbal Tea', price: '$9.99', image: 'tea.jpg' },
    { name: 'Herbal Soap', price: '$5.99', image: 'soap.jpg' },
    { name: 'Herbal Shampoo', price: '$12.99', image: 'shampoo.jpg' }
  ];
  
  // Function to generate product cards
  function generateProductCards() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>${product.price}</p>
      `;
      productList.appendChild(card);
    });
  }
  
  // Generate product cards when the page loads
  document.addEventListener('DOMContentLoaded', generateProductCards);
  