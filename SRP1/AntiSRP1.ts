// // Violates SRP: Too many responsibilities

// interface User {
//   name: string;
//   email: string;
// }

// class UserManager {
//   private users: User[] = [];

//   createUser(user: User): void {
//     // 1. Validate user
//     if (!user.name || !user.email.includes("@")) {
//       throw new Error("Invalid user");
//     }

//     // 2. Save to "DB"
//     this.users.push(user);

//     // 3. Send email
//     this.sendEmail(user.email, "Welcome to the app!");
//   }

//   private sendEmail(to: string, message: string): void {
//     // Simulated email sending
//     console.log(`Email sent to ${to}: ${message}`);
//   }

//   getAllUsers(): User[] {
//     return this.users;
//   }
// }

// const manager = new UserManager();
// manager.createUser({ name: "Adithya", email: "adithya@example.com" });
// console.log(manager.getAllUsers());
