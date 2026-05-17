// src/menu.js
/**
 * Módulo de Menú Digital (SIGR)
 * CRUD para los platos y bebidas disponibles.
 */
class MenuModule {
    constructor() {
        this.items = [];
    }

    addItem(item) {
        this.items.push({ id: this.items.length + 1, ...item });
        return this.items[this.items.length - 1];
    }

    getAllItems() {
        return this.items;
    }

    updateItem(id, updates) {
        const index = this.items.findIndex(i => i.id === id);
        if (index !== -1) {
            this.items[index] = { ...this.items[index], ...updates };
            return this.items[index];
        }
        return null;
    }
}

module.exports = new MenuModule();
