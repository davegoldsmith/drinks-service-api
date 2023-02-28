import request from "supertest";
import { app } from "../app";

test("GET /tea should return correct object", async () => {
  const res = await request(app).get("/tea").query({ teaName: "Builders" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Builders",
  });
});

test("GET /tea without a parameter should return correct object", async () => {
  const res = await request(app).get("/tea");
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Builders",
  });
});

test("GET /tea with a different given teaName should return correct object", async () => {
  const res = await request(app)
    .get("/tea")
    .query({ teaName: "Milky" });
  expect(res.statusCode).toEqual(200);
  expect(res.body).toEqual({
    drinkType: "Tea",
    name: "Milky",
  });
});