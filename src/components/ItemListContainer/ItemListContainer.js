import React from "react";
import "./ItemListContainer.scss";
import ItemList from "../ItemList/ItemList";
import imgProteina from "../../assets/ItemsImages/Proteina.jpg"

const ItemListContainer = ()=>{
    const ArrayProducts=[
        {
            id: 2,
            title: "Proteina",
            description: "Proteina de suero de huevo",
            price: 1800,
            pictureURL: "https://i.blogs.es/7ed9de/100-whey-protein/450_1000.jpg"
        }
    ]

    return(
        <div>
            <h1>Item list container</h1>
            <ItemList items={ArrayProducts}></ItemList>
        </div>
    )
}

export default ItemListContainer