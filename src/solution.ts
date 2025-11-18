
// problem 1

const formatValue = (value: string | number | boolean): string | number | boolean => {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else {
        return !value;
    }
}

// problem 2

const getLength = (value: string | any[]): number => {
    if (typeof value === "string") {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}


// problem 3

class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}


// problem 4

type RatedItem = {
    title: string;
    rating: number;
}

const filterByRating = (items: RatedItem[]): RatedItem[] => {
    return items.filter(item => item.rating >= 4);
}


// problem 5

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(user => user.isActive);
}

// problem 6

interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (book: Book): string => {
    const availability = book.isAvailable ? "Yes" : "No";
    return `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`;
}


// problem 7

const getUniqueValues = (arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] => {
    const combined = [...arr1, ...arr2];
    const result: (string | number)[] = [];

    for (let i = 0; i < combined.length; i++) {
        let exists = false;

        for (let j = 0; j < result.length; j++) {
            if (result[j] === combined[i]) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            result.push(combined[i]);
        }
    }

    return result;
}

// problem 8

type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}

const calculateTotalPrice = (products: Product[]): number => {
    if (products.length === 0) return 0;

    return products.reduce((total, product) => {
        let productTotal = product.price * product.quantity;

        if (product.discount !== undefined) {
            productTotal -= productTotal * (product.discount / 100);
        }

        return total + productTotal;
    }, 0);
}

