function Book (title, price) {
    this.title = title;
    this.price = price;
}
Book.prototype.buy = function() {
    console.log(`${this.title}을 ${this.price}에 구입`);
}

const book1 = new Book('javascript', 15000);
book1.buy();

function Textbook(title, price, major) {
    Book.call(this, title, price);
    this.major = major;
}
Textbook.prototype.buyTextBook = function() {
    console.log(`${this.major} 전공책, ${this.title}`);
}
Object.setPrototypeOf(Textbook.prototype, Book.prototype);