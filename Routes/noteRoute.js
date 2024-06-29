const express = require ("express")

const noteController = require("../controller/noteController")


const router = express.Router()

router.post("/register",noteController.createNote)
router.get("/read",noteController.readNote)
router.delete("/delete/:id",noteController.deleteNote)
router.put("/update/:id",noteController.updateNote)
router.get("/single/:id",noteController.SingleData)
module.exports = router