// src/auth.js
/**
 * Módulo de Autenticación de Usuarios (SIGR)
 * Maneja el inicio de sesión, registro y validación de tokens JWT.
 */
class AuthModule {
    constructor() {
        this.users = new Map();
    }

    register(username, password) {
        if (this.users.has(username)) {
            throw new Error("Usuario ya existe.");
        }
        this.users.set(username, { password }); // In a real app, hash the password
        return true;
    }

    login(username, password) {
        const user = this.users.get(username);
        if (user && user.password === password) {
            return { token: "fake-jwt-token-123" };
        }
        return null;
    }

    validateToken(token) {
        return token === "fake-jwt-token-123";
    }
}

module.exports = new AuthModule();
