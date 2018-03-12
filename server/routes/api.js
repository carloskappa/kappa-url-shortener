import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("API HOME ENDPOINT");
});

router.get("/new/*", (req, res) => {
  res.send("GENERATING NEW SHORT URL");
});

module.exports = router;
