import express from "express";

export const app = express();

// handlers
app.get("/", (req, res) => res.send("Welcome to the Drinks API!"));

app.get("/coffeelover", (req, res) => res.send("I like coffee!"));
