import React, { useContext } from 'react'
import { CardsWrapper } from './style'
import { ApiContext } from '../context/context'
import Card from './Card'

const CardList = () => {
    const context = useContext(ApiContext)

    const clickHandler = (e) => {
        if (e.target.innerText == 'Add to cart') {
            const item = context.state.data.data.find(el => el.uuid === e.target.id)
            let copyOfItems = [...context.state.cart]
            copyOfItems.push(item)
            context.setState({
                ...context.state,
                cart: copyOfItems
            })
        } else
            if (e.target.innerText == 'Add to wishlist'){
            const item = context.state.data.data.find(el => el.uuid === e.target.id)
            let copyOfItems = [...context.state.wishlist]
            copyOfItems.push(item)
            context.setState({
                ...context.state,
                wishlist: copyOfItems
            })

        }}
        return (
            <CardsWrapper>
                {
                    context.state.isLoaded && context.state.data.data.map(el => {
                        return <Card {...el} key={el.uuid}
                            onClick={clickHandler}
                        />
                    })
                }

            </CardsWrapper>
        )
    }
    export default CardList