import React, {useState} from 'react'

function MyComponent(){

    const [name, setName] = useState("Guest");
    const [quantity, setQuantity] = useState(1);
    const [comment,setComment] = useState("");
    const [payment, setPayment] = useState("");

    function nameChangeHandler(event){
        setName(event.target.value);
    }

    function quantityChangeHandler(event){
        setQuantity(event.target.value);
    }

    function commentChangeHandler(event){
        setComment(event.target.value);
    }

    function paymentChangeHandler(event){
        setPayment(event.target.value);
    }

    return(<div>
                <input value = {name} onChange={nameChangeHandler}></input>
                <p>name : {name}</p>
                <input value = {quantity} onChange={quantityChangeHandler} type = "number"></input>
                <p>Quantity : {quantity}</p>
                <textarea value = {comment} onChange={commentChangeHandler} placeholder='write some description'></textarea>
                <p>Decsription : {comment}</p>
                <select value = {payment} onChange={paymentChangeHandler}>
                    <option value = "">Select an Option</option>
                    <option value = "UPI"> UPI payment </option>
                    <option value = "CASH"> Cash Payment</option>
                </select>
                <p> Payment : {payment}</p>

    </div>)
}

export default MyComponent