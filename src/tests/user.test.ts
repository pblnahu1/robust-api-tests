/**
 * Uso `supertest` para hacer peticiones HTTP a la API sin necesidad de que esté en ejecución en un server real.
 * Cada `describe` agrupa pruebas relacionadas con una ruta en particular (/api/users y /api/users/:id).
 * Cada `test` define una prueba específica dentro de ese grupo.
 * `expect` se usa para hacer afirmaciones sobre lo que debería devolver la API.
 */

// importo request de la librería supertest para hacer peticiones http a mi api en los tests
import request from "supertest";

// importo la aplicacion express desde server.ts para probarla
import app from "../server";

// importo las funciones describe, test y expect de vitest
import {describe, test, expect} from "vitest"

// describe agrupa los tests
describe("GET /api/users", () => {
  // test define una prueba específica dentro de este grupo   
  test("Debe devolver una lista de usuarios", async () => {

    // hago una peticion GET a la ruta /api/users
    const response = await request(app).get("/api/users");

    // verifico que el código de respuesta sea 200 (OK)
    expect(response.status).toBe(200);

    // verifico que el cuerpo de la respuesta sea un array
    expect(response.body).toBeInstanceOf(Array);

    // verifico que el array tenga al menos un elemento
    expect(response.body.length).toBeGreaterThan(0);
  });
});

// describe agrupa pruebas relacionadas con la ruta GET /api/users/:id
describe("GET /api/users/:id", () => {

  // prueba para obtener un usuario específico
  test("Debe devolver un usuario específico", async () => {

    // hago una peticion GET  a /api/users/1
    const response = await request(app).get("/api/users/1");

    // verifico que el codigo de respuesta sea 200 (OK)
    expect(response.status).toBe(200);

    // verifico que el objeto devuelto tiene la propiedad 'id' con valor '1'
    expect(response.body).toHaveProperty("id", 1);
  });


  // prueba para verificar si el usuario no existe, devuelve 404
  test("Debe devolver 404 si el usuario no existe", async () => {

    // hago una peticion Get a /api/users/999 (usuario q no existe)
    const response = await request(app).get("/api/users/999");

    // verifico que el codigo de respuesta sea 404 (not found)
    expect(response.status).toBe(404);

    // verifico que el cuerpo de la respuesta tenga un mensaje de error
    expect(response.body).toHaveProperty("message", "Usuario no encontrado");
  });
});
