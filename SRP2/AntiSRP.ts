// // // ✅ Interface
// // interface Product {
// //   id: string;
// //   name: string;
// //   price: number;
// //   quantity: number;
// // }

// interface Order {
//   productId: string;
//   quantity: number;
//   userEmail: string;
// }

// class OrderService {
//   private inventory: Product[] = [
//     { id: 'p1', name: 'Keyboard', price: 2000, quantity: 5 },
//     { id: 'p2', name: 'Mouse', price: 1000, quantity: 10 },
//   ];

//   placeOrder(order: Order): void {
//     // 1. Find product
//     const product = this.inventory.find(p => p.id === order.productId);
//     if (!product) throw new Error('Product not found');

//     // 2. Check stock
//     if (product.quantity < order.quantity) {
//       throw new Error('Not enough stock');
//     }

//     // 3. Calculate total
//     const total = product.price * order.quantity;

//     // 4. Update inventory
//     product.quantity -= order.quantity;

//     // 5. Send confirmation email
//     console.log(`📧 Email sent to ${order.userEmail}: Your order of ₹${total} was successful`);

//     // 6. Print summary
//     console.log(`✔️ Order Placed: ${order.quantity}x ${product.name}, Total: ₹${total}`);
//   }
// }
