import React, { useState } from "react";
import "./ItemCount.scss";

const ItemCount = (props) => {
    const [itemCant, setItemCant] = useState(0)
    const [itemCantDisabled, setItemCantDisabled] = useState(false)

    const AddItem = (string) => {
        if(string==="+"){
            setItemCant(itemCant + 1)
            if(itemCant===props.stock){
                setItemCantDisabled(true)
            }
        }else{
            setItemCant(itemCant - 1)
            if(itemCant>props.stock){
                setItemCantDisabled(false)
            }
        }
    }

    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <div className="card-body">
                    <h4 className="card-title">Proteina 80%</h4>
                    <div className="row">
                        <button className="button-count col-lg-2" onClick={()=>AddItem("-")}>-</button>
                        <input placeholder={itemCant} className="text-center col-6"></input>
                        <button className="button-count col-lg-2" disabled={itemCantDisabled} onClick={()=>AddItem("+")}>+</button>
                    </div>
                    <button type="button" class="btn btn-outline-secondary mt-2">Agregar al carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCount