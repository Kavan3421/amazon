export let orders = [];
const storedOrders = localStorage.getItem('orders');

if (storedOrders) {
  orders = JSON.parse(storedOrders); 
}

export function addOrder(order) {
  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}