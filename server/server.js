const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));


const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/events');
// Event Schema
const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
});

const Event = mongoose.model("Event", eventSchema);

// Routes
app.get("/events", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/events", async (req, res) => {
  const { title, description, date } = req.body;

  try {
    const newEvent = new Event({ title, description, date });
    await newEvent.save();
    res.json(newEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get("/events/:id", async (req, res) => {
  const eventId = req.params.id;

  try {
    const event = await Event.findById(eventId);
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.put("/events/:id", async (req, res) => {
  const eventId = req.params.id;
  const { title, description, date } = req.body;

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      { title, description, date },
      { new: true }
    );
    res.json(updatedEvent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.delete("/events/:id", async (req, res) => {
  const eventId = req.params.id;

  try {
    await Event.findByIdAndDelete(eventId);
    res.json({ message: "Event deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
