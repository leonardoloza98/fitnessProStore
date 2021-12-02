import React from "react";
import "./Item.scss"

const Item = (props)=>{
    const {itemProps} = props
    return(
        <div>
            <h5>{itemProps.id}</h5>
            <h5>{itemProps.title}</h5>
            <h5>{itemProps.description}</h5>
            <h5>{itemProps.price}</h5>
            <img src={itemProps.pictureURL}></img>
        </div>
    )
}

export default Item;