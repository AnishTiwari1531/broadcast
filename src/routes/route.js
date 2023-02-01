const express = require('express');
const router = express.Router();
const { verifyTokenAndAuthorization, verifyTokenAndAdmin, } = require("../middleware/auth");
const { createUser, login, getUserDetails, getAllUserName, updateUser, deleteUser } = require("../controller/userController");


//User Controller
router.post("/createuser", createUser);
router.post("/login", login);
router.put("/updateUser/:userId", verifyTokenAndAuthorization, updateUser);
router.delete("/deleteUser/:userId", verifyTokenAndAuthorization, deleteUser);


//Admin Controller
router.get("/getUserDetails", verifyTokenAndAdmin, getUserDetails)

//Get All User
router.get('/getAllUserName', getAllUserName)

//If user try to search home page [ without any specfic route]
router.all("/", (req, res) => {
    return res.status(200).send({
        Status: "HELLO! NICE TO SEE YOU HERE. ",
        Message: " TRY SPECIFIC ROUTES TO SIGN UP, SIGN IN, CREATE-READ-UPDATE-DELETE OR FETCH ALL USER DETAILS"
    });
})


//if api is invalid OR wrong URL
router.all("**", (req, res) => {
    res.status(404).send({ Status: false, Message: "THE API YOU REQUESTED IS NOT AVAILABLE" })
}
);

module.exports = router