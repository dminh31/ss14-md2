import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct } from '../../store'
// let initProduct = [
//     {
//         name: "banh mi",
//         price: 5000
//     },
//     {
//         name: "banh bao",
//         price: 6000
//     },
//     {
//         name: "banh chui",
//         price: 8000
//     }
// ]
export default function Product() {
    const [products, setProducts] = useState()
    const dispatch = useDispatch()
    const data = useSelector(state => {
        // console.log("11111",state.productReducer.products);
        return state.productReducer.products
    })
    const handleClick = () => {
        console.log("1111", products);
        dispatch(addProduct(products))
        setProducts("")
    }
    return (
        <>
            list product
            <input type="text"
                onChange={(e) => setProducts(e.target.value)}
                value={products} />
            <button onClick={handleClick}>click</button>    
            {data.map((item) => {
                return <li>Name: {item.name}  Price: {item.price}
                    <button style={{ marginLeft: "10px" }}>Xoa</button>
                    <button style={{ marginLeft: "10px" }}>Sua</button>
                </li>
            })}
           
        </>
    )
}
