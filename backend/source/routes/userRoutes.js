const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const verifyToken = require("../middlewares/authMiddleware");

router.post("/cadastro", userController.registerUser);
router.post("/login", userController.loginUser);

//pivate route
router.get("/perfil", verifyToken, (req, res) => {
  res.json({
    status: "Sucesso",
    message: "Acesso autorizado!",
    user: req.user,
  });
});

module.exports = router;
