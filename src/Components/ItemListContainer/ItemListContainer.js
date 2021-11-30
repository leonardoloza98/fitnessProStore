import React from "react";
import ItemCount from "../ItemCount/ItemCount";


const ItemListContainer = () => {
    return (
        <div>
            <h1>Bienvenidos a Fitness ProStore</h1>
            <ItemCount stock="10" initial="1"></ItemCount>
        </div>
    )
}

export default ItemListContainer