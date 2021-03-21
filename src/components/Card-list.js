import React, {useContext} from 'react'
import {CardsWrapper} from './style'
import {ApiContext} from '../context/context'
import Card from './Card'

 const CardList=()=> {
    const context = useContext(ApiContext)
    return (
        <CardsWrapper>
        {
           context.state.isLoaded && context.state.data.data.map(el=>{
                return <Card {...el} key={el.uuid}/>
            })
        }

        </CardsWrapper>
    )
}
export default CardList