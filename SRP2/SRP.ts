interface Iproduct {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

interface Iorder {
  productId: string;
  quantity: number;
  userEmail: string;
}

class Inventory {
  private inventory: Iproduct[] = [
    { id: "p1", name: "Keyboard", price: 2000, quantity: 5 },
    { id: "p2", name: "Mouse", price: 1000, quantity: 10 },
  ];

  getInventory() {
    return this.inventory;
  }
}

class FindProduct {
  constructor(private products: Iproduct[], private order: Iorder) {}
  findProduct() {
    const product = this.products.find((p) => p.id === this.order.productId);
    if (!product) throw new Error("Product not found");
    return product;
  }
}

class CheckStocks {
  constructor(private product: Iproduct, private orders: Iorder) {}
  getStocks() {
    if (this.product.quantity < this.orders.quantity) {
      throw new Error("Not enough stock");
    }
  }
}

class Calculate {
  constructor(private product: Iproduct, private order: Iorder) {}
  getPrice() {
    return this.product.price * this.order.quantity;
  }
}

class UpdateStocks {
  constructor(private product: Iproduct, private order: Iorder) {}
  stockUpdate() {
    this.product.quantity -= this.order.quantity;
  }
}

class Confirmation {
  constructor(private order: Iorder, private total: number) {}
  sendMail() {
    console.log(
      `📧 Email sent to ${this.order.userEmail}: Your order of ₹${this.total} was successful`
    );
  }
}

class PrintSummary {
  constructor(
    private product: Iproduct,
    private order: Iorder,
    private total: number
  ) {}
  printSummary() {
    console.log(
      `✔️ Order Placed: ${this.order.quantity}x ${this.product.name}, Total: ₹${this.total}`
    );
  }
}


// Exectuing class
class PlaceOrder {
  constructor(private inventory: Inventory) {}

  execute(order: Iorder) {
    const products = this.inventory.getInventory();
    try {
      const product = (new FindProduct(products, order).findProduct());
      new CheckStocks(product, order).getStocks();
      const total = new Calculate(product, order).getPrice();
      new UpdateStocks(product, order).stockUpdate();
      new Confirmation(order, total).sendMail();
      new PrintSummary(product, order, total).printSummary();
    } catch (error) {
        console.log("Order Failed")
      console.log(error);
    }
  }
}

// using
const invet = new Inventory()
const order = {
  productId: "p1",
  quantity: 2,
  userEmail: "adithya@example.com"
}

new PlaceOrder(invet).execute(order)