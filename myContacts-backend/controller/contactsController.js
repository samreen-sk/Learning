const asynchandler = require("../utils/asynchandler");
const Contact = require("../models/contactsModel");
// desc : fetch all contacts
// path : /api/contacts (get)
const getAllContacts = asynchandler(async (req,res)=>{
    const contacts = await Contact.find({user_id : req.user.id});
    res.status(200).json(contacts);
});

// desc : create contact
// path : /api/contacts (post)
const createContact = asynchandler(async(req,res)=>{
    const {name, email, number} = req.body;
    if(!name || !email || !number){
        res.status(400);
        throw new Error("The details cant be empty");
    }
    const contact = await Contact.create({
        name,
        email,
        number,
        user_id : req.user.id
    });
    res.status(200).json(contact);
});

// desc : fetch a contact by id 
// path : /api/contacts/:id (get)

const getContact = asynchandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
        
    }
    res.status(200).json(contact);
});

// desc : update a contact by id 
// path : /api/contacts/:id (put)

const updateContact = asynchandler(async(req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
        
    }
    if(contact.user_id.toString() !==req.user.id){
        res.status(401);
        throw new Error("Unauthorized Access and you can't update");
    }
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id,req.body,{new : true});
    res.status(200).json(updatedContact);
});

// desc : delete a contact by id 
// path : /api/contacts/:id (delete)

const deleteContact = asynchandler(async (req,res)=>{
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not found");
        
    }
    if(contact.user_id.toString() !==req.user.id){
        res.status(401);
        throw new Error("Unauthorized Access and you can't update");
    }
    
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedContact);
});

module.exports = {
    getAllContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};