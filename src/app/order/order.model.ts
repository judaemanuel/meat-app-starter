class Order {
    constructor(
        public endereco: string,
        public numero: number,
        public complemento: string,
        public paymentOption: string,
        public orderItems: OrderItem[] = [],
        public id?: number
    ) { }

}

class OrderItem {
    constructor(
        public quantity: number,
        public itemId: string
    ) { }

}

export { Order, OrderItem }
