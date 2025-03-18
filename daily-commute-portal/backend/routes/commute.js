const express = require("express");
const router = express.Router();
const axios = require("axios");

// Get route between two locations
router.get("/route", async (req, res) => {
  const { start, end } = req.query;
  try {
    const response = await axios.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${start}&destination=${end}&key=${process.env.GOOGLE_MAPS_API_KEY}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch route" });
  }
});

module.exports = router;