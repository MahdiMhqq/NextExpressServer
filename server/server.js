// server/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// mock data to send to our frontend
let events = [
  {
    id: 1,
    name: "Charity Ball",
    category: "Fundraising",
    description:
      "Spend an elegant night of dinner and dancing with us as we raise money for our new rescue farm.",
    featuredImage:
      "https://images.unsplash.com/photo-1648737965997-38b0cdf41c94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    images: [
      "https://placekitten.com/500/500",
      "https://placekitten.com/500/500",
      "https://placekitten.com/500/500",
    ],
    location: "1234 Fancy Ave",
    date: "12-25-2019",
    time: "11:30",
  },
  {
    id: 2,
    name: "Rescue Center Goods Drive",
    category: "Adoptions",
    description:
      "Come to our donation drive to help us replenish our stock of pet food, toys, bedding, etc. We will have live bands, games, food trucks, and much more.",
    featuredImage:
      "https://images.unsplash.com/photo-1648737119247-e93f56878edf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
    images: ["https://placekitten.com/500/500"],
    location: "1234 Dog Alley",
    date: "11-21-2019",
    time: "12:00",
  },
];

app.get("/", (req, res) => {
  res.send(`Hi! Server is listening on port ${port}`);
});

// listen on the port
app.listen(port);

// NEW -- get all events
app.get("/api/events", (req, res) => {
  res.send(events);
});

// NEW -- get event with specified id
app.get("/api/events/:id", (req, res) => {
  const id = Number(req.params.id);
  const event = events.find((event) => event.id === id);
  res.send(event);
});
