const express = require("express");
const router = express.Router();
const pool = require("../modules/pool.js");

router.post("/", (req, res) => {
  const { feeling, understanding, support, comments } = req.body;
  const queryText = `
    INSERT INTO feedback (feeling, understanding, support, comments)
    VALUES ($1, $2, $3, $4)
  `;
  const queryArgs = [feeling, understanding, support, comments];

  pool
    .query(queryText, queryArgs)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;
