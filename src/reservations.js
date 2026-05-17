// src/reservations.js
/**
 * Módulo de Reservas (SIGR)
 * Gestión de mesas y horarios.
 */
class ReservationsModule {
    constructor() {
        this.reservations = [];
    }

    makeReservation(customerName, date, time, partySize) {
        const reservation = {
            id: Math.random().toString(36).substr(2, 9),
            customerName,
            date,
            time,
            partySize,
            status: 'CONFIRMED'
        };
        this.reservations.push(reservation);
        return reservation;
    }

    getReservationsForDate(date) {
        return this.reservations.filter(r => r.date === date);
    }
}

module.exports = new ReservationsModule();
