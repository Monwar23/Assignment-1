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
