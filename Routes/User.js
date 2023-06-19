const express = require("express");
const router = express.Router();
const controller = require("../Controllers/UserController");
const userSchema = require("../Validations/userValidation");
const validation = require("../Middlwares/validationMiddleware");

router.get("/", controller.getAll);
router.get("/:id", controller.getSingleUser);
router.post("/", validation(userSchema), controller.saveUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

module.exports = router;
