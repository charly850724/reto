const request = require("supertest");

const app = require("../src/app");

/**
 * Testing get star wars endpoint
 */
describe("GET /person", () => {
  it("respond with json containing a person", (done) => {
    request(app)
      .get("/person/1")
      .set("Accept", "application/json")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200, done);
  });
});
