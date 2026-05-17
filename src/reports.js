// src/reports.js
/**
 * Módulo de Cierre de Caja y Reportes de Ventas (SIGR)
 * Genera reportes diarios de ventas y gestiona el cierre de caja.
 */
class ReportsModule {
    constructor() {
        this.transactions = [];
        this.cashRegister = { openedAt: null, closedAt: null, total: 0 };
    }

    openCashRegister() {
        this.cashRegister.openedAt = new Date();
        this.cashRegister.closedAt = null;
        this.cashRegister.total = 0;
        return this.cashRegister;
    }

    registerTransaction(orderId, amount) {
        const transaction = {
            id: Date.now().toString(),
            orderId,
            amount,
            timestamp: new Date()
        };
        this.transactions.push(transaction);
        this.cashRegister.total += amount;
        return transaction;
    }

    closeCashRegister() {
        this.cashRegister.closedAt = new Date();
        return {
            openedAt: this.cashRegister.openedAt,
            closedAt: this.cashRegister.closedAt,
            totalTransactions: this.transactions.length,
            totalRevenue: this.cashRegister.total
        };
    }

    getDailyReport(date) {
        const dayTransactions = this.transactions.filter(t => {
            const tDate = new Date(t.timestamp).toISOString().split('T')[0];
            return tDate === date;
        });
        return {
            date,
            transactions: dayTransactions.length,
            revenue: dayTransactions.reduce((sum, t) => sum + t.amount, 0)
        };
    }
}

module.exports = new ReportsModule();
