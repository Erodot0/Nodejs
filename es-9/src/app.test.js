const createApp = require("./app.js");

const app = createApp();

const request = supertest(app);
const supertest = require("supertest");


test("GET /", async () => {
  const response = await request
    .get("/")
    .expect(200)
   

  .expect(response.body).toEqual("<html><body><h1>Welcome to the World Wide Web!</h1></body></html>");
});
/*
Our integration test in app.test.js expects a JSON response.

Change the test to expect an HTML response header: Content-Type: text/html

Change the test to expect this HTML in response.text:


Welcome to the World Wide Web!
Run the test with npm test — it should fail.
Update the code in app.js to send the HTTP response the test expects.
Run the test with npm test — it should pass.
*/