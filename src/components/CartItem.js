import React from 'react'
//import { Link } from 'react-router-dom'
//export default function Cocktail({ image, name, id, info, price }) {

const CartItem = () => {
    return (
    <div class="row">
        <div class="col s4 m3">
            <div class="card">
                <div class="card-image">
                    <img src="./public/food.jpg" />
                    <span class="card-title">Food</span>
                        <a class="btn-floating halfway-fab waves-effect waves-light red">
                        <i class="material-icons">+</i>
                        </a>
                </div>
                <div class="card-content ">
                    <p>Pretty cards sdsdsdsdsd</p>
                </div>
                <div>
                    <p>$17.99</p>
                </div>
            </div>
        </div>
    </div>
  )
}
export default CartItem;