const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const body = document.body;
const themeToggler = document.querySelector(".theme-toggler");

menuBtn.addEventListener('click', () => {
  body.classList.add('show-sidebar');
});

closeBtn.addEventListener('click', () => {
  body.classList.remove('show-sidebar');
});

themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables');

  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
});



Orders.forEach(order => {
  const tr = document.createElement('tr');
  const trContent = `
    <td>${order.productName}</td>
    <td>${order.productNumber}</td>
    <td>${order.paymentStatus}</td>
    <td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td>
    <td class="primary">Details</td>
  `;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
});

