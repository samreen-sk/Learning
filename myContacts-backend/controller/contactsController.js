const asynchandler = require("../utils/asynchandler");

// desc : fetch all contacts
// path : /api/contacts (get)
const getAllContacts = asynchandler((req,res)=>{
    res.status(200).json({message : "get all the contacts"});
});

// desc : create contact
// path : /api/contacts (post)
const createContact = asynchandler((req,res)=>{
    const {name, email, number} = req.body;
    if(!name || !email || !number){

        res.status(400);
        throw new Error("The details cant be empty");

    }
    res.status(200).json({mesaage : "create a contact"});
});

// desc : fetch a contact by id 
// path : /api/contacts/:id (get)

const getContact = asynchandler((req,res)=>{
    res.status(200).json({message : `get the contact of the ${req.params.id}`});
});

// desc : update a contact by id 
// path : /api/contacts/:id (put)

const updateContact = asynchandler((req,res)=>{
    res.status(200).json({message : `the contact has ${req.params.id} been modified `});
});

// desc : delete a contact by id 
// path : /api/contacts/:id (delete)

const deleteContact = asynchandler((req,res)=>{
    res.status(200).json({message : `the contact of ${req.params.id} has been deleted`});
});

module.exports = {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};