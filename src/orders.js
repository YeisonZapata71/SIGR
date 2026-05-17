// src/orders.js
/**
 * Módulo de Pedidos en Tiempo Real (SIGR)
 * Gestión de estados de preparación y entrega de comandas.
 */
class OrdersModule {
    constructor() {
        this.orders = [];
    }

    createOrder(tableId, items) {
        const newOrder = {
            id: Date.now().toString(),
            tableId,
            items,
            status: 'PENDING', // PENDING, PREPARING, READY, DELIVERED
            timestamp: new Date()
        };
        this.orders.push(newOrder);
        return newOrder;
    }

    updateOrderStatus(orderId, status) {
        const order = this.orders.find(o => o.id === orderId);
        if (order) {
            order.status = status;
            return order;
        }
        return null;
    }
}

module.exports = new OrdersModule();
