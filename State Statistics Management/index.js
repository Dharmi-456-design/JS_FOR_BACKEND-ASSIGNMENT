const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());


let states = [
  { id: 1, name: "Gujarat", population: 63872399, literacyRate: 78.03, annualBudget: 243965, gdp: 21000000 },
  { id: 2, name: "Maharashtra", population: 112374333, literacyRate: 82.34, annualBudget: 340000, gdp: 35000000 },
  { id: 3, name: "Kerala", population: 33406061, literacyRate: 94.00, annualBudget: 150000, gdp: 12000000 },
  { id: 4, name: "Tamil Nadu", population: 72147030, literacyRate: 80.09, annualBudget: 300000, gdp: 22000000 },
  { id: 5, name: "Rajasthan", population: 68548437, literacyRate: 66.11, annualBudget: 225000, gdp: 14000000 },
  { id: 6, name: "Punjab", population: 27743338, literacyRate: 75.84, annualBudget: 180000, gdp: 11000000 },
  { id: 7, name: "Bihar", population: 104099452, literacyRate: 61.80, annualBudget: 261885, gdp: 6500000 },
  { id: 8, name: "Goa", population: 1458545, literacyRate: 88.70, annualBudget: 25000, gdp: 800000 }
];


app.get("/states", (req, res) => {
  res.status(200).json(states);
});



app.get("/states/highest-gdp", (req, res) => {
  const highest = states.reduce((a, b) => a.gdp > b.gdp ? a : b);
  res.json(highest);
});

app.get("/states/:id", (req, res) => {
  const state = states.find(s => s.id == req.params.id);
  if (!state) return res.status(404).json({ message: "State not found" });
  res.json(state);
});


app.post("/states", (req, res) => {
  const newState = {
    id: states.length + 1,
    ...req.body
  };
  states.push(newState);
  res.status(201).json(newState);
});



app.put("/states/:id", (req, res) => {
  const index = states.findIndex(s => s.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "State not found" });

  states[index] = { id: states[index].id, ...req.body };
  res.json(states[index]);
});



app.put("/states/:id/budget", (req, res) => {
  const state = states.find(s => s.id == req.params.id);
  if (!state) return res.status(404).json({ message: "State not found" });

  state.annualBudget = req.body.annualBudget;
  res.json(state);
});


app.put("/states/:id/population", (req, res) => {
  const state = states.find(s => s.id == req.params.id);
  if (!state) return res.status(404).json({ message: "State not found" });

  state.population = req.body.population;
  res.json(state);
});


app.patch("/states/:id/literacy", (req, res) => {
  const state = states.find(s => s.id == req.params.id);
  if (!state) return res.status(404).json({ message: "State not found" });

  state.literacyRate = req.body.literacyRate;
  res.json(state);
});


app.patch("/states/:id/gdp", (req, res) => {
  const state = states.find(s => s.id == req.params.id);
  if (!state) return res.status(404).json({ message: "State not found" });

  state.gdp = req.body.gdp;
  res.json(state);
});


app.patch("/states/:id", (req, res) => {
  const state = states.find(s => s.id == req.params.id);
  if (!state) return res.status(404).json({ message: "State not found" });

  Object.assign(state, req.body);
  res.json(state);
});


app.delete("/states/:id", (req, res) => {
  const index = states.findIndex(s => s.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "State not found" });

  states.splice(index, 1);
  res.status(204).send();
});

app.delete("/states/name/:name", (req, res) => {
  const index = states.findIndex(s => s.name.toLowerCase() === req.params.name.toLowerCase());
  if (index === -1) return res.status(404).json({ message: "State not found" });

  states.splice(index, 1);
  res.status(204).send();
});


app.delete("/states/low-literacy/:value", (req, res) => {
  const value = Number(req.params.value);
  const before = states.length;

  states = states.filter(s => s.literacyRate >= value);

  res.json({ deletedCount: before - states.length });
});


app.listen(5000, () => {
  console.log("Server running on 5000");
});