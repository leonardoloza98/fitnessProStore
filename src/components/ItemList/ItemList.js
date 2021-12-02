import React from "react";
import "./ItemList.scss";
import Item from "../Item/Item";

const ItemList = (props)=>{
    const {items} = props;
    const proteina = items[0];
    return(
        <div>
            {items.map(item=>{
                return(
                  <Item itemProps={item}></Item>  
                )
            })}
        </div>
    )
}

export default ItemList;