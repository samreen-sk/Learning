const express = require("express");
const router = express.Router();

const {getAllContacts, createContact, getContact, updateContact, deleteContact} = require("../controller/contactsController");

router.get("/",getAllContacts);

router.post("/",createContact);

router.get("/:id",getContact);

router.put("/:id",updateContact);

router.delete("/:id",deleteContact);

module.exports = router;