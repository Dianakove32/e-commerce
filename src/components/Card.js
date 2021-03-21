import React from 'react'
import { ButtonWrapper, PriceSpan, SingleCard } from "./style";

export default function Card({title, description,cover_image_url,retail_price,uuid}) {
    return (
        <SingleCard  >
        <img src={cover_image_url} alt ={title}/>
<h2>{title}</h2>
<p>{description}</p>
<p>{retail_price.formatted_iso_value}</p>
<ButtonWrapper>
   <button id = {uuid}>Add to cart</button>
<button id = {uuid}>Add to wishlist</button>
</ButtonWrapper>

        </SingleCard>
    )
}
