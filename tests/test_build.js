// tests/test_build.js
const assert = require('assert');

// Importar módulos
const auth = require('../src/auth');
const menu = require('../src/menu');
const orders = require('../src/orders');
const reservations = require('../src/reservations');
const reports = require('../src/reports');

console.log("-------------------------------------------------");
console.log("Iniciando Suite de Pruebas de Integracion (SIGR)");
console.log("-------------------------------------------------");

try {
    // 1. Prueba de Autenticación
    console.log("[TEST] Autenticacion: Registro de usuario administrativo");
    auth.register("admin", "secret123");
    const session = auth.login("admin", "secret123");
    assert.ok(session.token, "El login debe devolver un token");
    console.log("  [OK] Exito: Token generado.");

    // 2. Prueba de Menú
    console.log("[TEST] Menu: Agregar un plato principal");
    const item = menu.addItem({ name: "Ceviche Mixto", price: 15.50, category: "Platos Fuertes" });
    assert.strictEqual(item.name, "Ceviche Mixto", "El nombre del plato debe coincidir");
    console.log("  [OK] Exito: Plato registrado.");

    // 3. Prueba de Pedidos
    console.log("[TEST] Pedidos: Creacion de comanda y cambio de estado");
    const order = orders.createOrder(5, [item]);
    const updatedOrder = orders.updateOrderStatus(order.id, 'PREPARING');
    assert.strictEqual(updatedOrder.status, "PREPARING", "El estado debe actualizarse correctamente");
    console.log("  [OK] Exito: Comanda en preparacion.");

    // 4. Prueba de Reservas
    console.log("[TEST] Reservas: Nueva reserva para 4 personas");
    const res = reservations.makeReservation("Juan Perez", "2026-06-01", "20:00", 4);
    assert.strictEqual(res.partySize, 4, "El tamano del grupo debe ser 4");
    console.log("  [OK] Exito: Reserva confirmada.");

    // 5. Prueba de Reportes y Cierre de Caja
    console.log("[TEST] Reportes: Apertura de caja y registro de transaccion");
    reports.openCashRegister();
    reports.registerTransaction(order.id, 15.50);
    const cashClose = reports.closeCashRegister();
    assert.strictEqual(cashClose.totalTransactions, 1, "Debe haber 1 transaccion");
    assert.strictEqual(cashClose.totalRevenue, 15.50, "El total debe ser 15.50");
    console.log("  [OK] Exito: Cierre de caja completado.");

    console.log("-------------------------------------------------");
    console.log("RESULTADO: COMPILACION Y PRUEBAS EXITOSAS");
    console.log("Se cumplen los criterios de estabilidad para la Linea Base.");
    console.log("-------------------------------------------------");
    process.exit(0);

} catch (error) {
    console.error("ERROR EN LA COMPILACION O PRUEBAS:", error.message);
    process.exit(1);
}
