class Order {
    constructor(
        public id: number,
        public endereco: string,
        public numero: number,
        public complemento: string,
        public paymentOption: string,
        public orderItems: OrderItem[] = []
    ) { }

}

class OrderItem {
    constructor(
        public quantity: number,
        public itemId: string
    ) { }

}

export { Order, OrderItem }
