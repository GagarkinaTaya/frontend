type Product = {
    id: number;
    title: string;
    price: number;
}

type DiscountedProduct = Product & {
    discount: number;
}

const item: DiscountedProduct = {
    id: 1,
    title: "macbook",
    price: 110000,
    discount: 5990
}