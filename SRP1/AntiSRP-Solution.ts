interface Iuser {
  name: string;
  email: string;
}

class UserManager {
  constructor(private db: Database) {}

  createUser(user: Iuser) {
    try {
      new ValidataUser(user).validate();
      this.db.users.push(user);
      new SendEmail(user).sendEmail();
      console.log("user created successfully!");
    } catch (error) {
      console.log("Failed to create user", error);
    }
  }
}

class Database {
  users: Iuser[] = [];
}

class ValidataUser {
  constructor(private user: Iuser) {}
  validate() {
    if (!this.user.name || this.user.email.indexOf("@") === -1) {
      throw new Error("Invalid user");
    }
    console.log("User validated")
  }
}

class SendEmail {
  constructor(private user: Iuser) {}
  sendEmail() {
    console.log("Sending email to, ", this.user.email);
  }
}

class FetchUser {
  constructor(private db: Database) {}
  getAllUsers(): Iuser[] {
    return this.db.users;
  }
}

/// Usage;
const db = new Database();
const manager = new UserManager(db);
manager.createUser({ name: "Adithya", email: "adithy@ad.com" });

const Fetch = new FetchUser(db);
console.log(Fetch.getAllUsers());
