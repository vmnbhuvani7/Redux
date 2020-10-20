import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { buyCake } from '../redux/cake/CakeAction'

function HookCakeContainer() {

    const numOfCake = useSelector(state => state.cake.numOfCake)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Hook Number of cake - {numOfCake}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
        </div>
    )
}

export default HookCakeContainer
