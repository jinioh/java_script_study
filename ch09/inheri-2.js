class BookC {
    constructor(title, price) {
        this.title = title;
        this.price = price;
    }
    buy() {
        console.log(`${this.title}을 ${this.price}에 구입`);
    }
}

const book1 = BookC('자료구조', 20000);
book1.buy();

class TextbookC extends BookC {
    constructor(title, price, major) {
        super(title, price);
        this.major = major;
    }

    buyTextbook() {
        console.log(`${this.major} 전공책, ${this.title}`);
    }
}
const book2 = new TextbookC('인공지능', 5000, "컴공");
book2.buyTextbook();
book2.buy();