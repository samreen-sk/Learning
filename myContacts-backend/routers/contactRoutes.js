const express = require("express");
const router = express.Router();

const {getAllContacts, createContact, getContact, updateContact, deleteContact} = require("../controller/contactsController");

const validateToken = require("../middleware/validateTokenHandler");

router.use(validateToken)

router.get("/",getAllContacts);

router.post("/",createContact);

router.get("/:id",getContact);

router.put("/:id",updateContact);

router.delete("/:id",deleteContact);

module.exports = router;