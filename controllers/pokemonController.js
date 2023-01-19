const express = require("express");
const router = express.Router();

/**
 * Models
 */
const Poke = require("../models/pokemon");

// Index
router.get("/", (req, res) => {
  Poke.find({}, (error, allPokemon) => {
    res.render("Index", {
      pokemon: allPokemon,
    });
  });
});


// Update
router.put("/:id", (req, res) => {
  console.log("/pokemon/:id");
  Poke.findByIdAndUpdate(req.params.id, req.body, (err, updatedPoke) => {
    if (err) {
      return res.send({ error: err });
    }
    console.log("updatedPoke", updatedPoke);
    res.redirect(`/pokemon/${req.params.id}`);
  });
}); 


// Edit
router.get("/:id/edit", (req, res) => {
  Poke.findById(req.params.id, (err, foundPoke) => {
    if (!err) {
      res.render("Edit", {
        poke: foundPoke,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

// Create
router.post("/", (req, res) => {
    Poke.create(req.body, (error, createdPoke) => {
    res.redirect("/pokemon");
  });
}); 

// Delete
router.delete("/:id", (req, res) => {
  Poke.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/pokemon");
  });
}); 

// New
router.get("/new", (req, res) => {
  res.render("New");
});

// Show
router.get("/:id", (req, res) => {
  Poke.findById(req.params.id, (error, foundPoke) => {
    res.render("Show", {
      poke: foundPoke,
    });
  });
});

module.exports = router;