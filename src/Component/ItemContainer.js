import React from 'react'
import { connect } from 'react-redux'

import { buyCake } from '../redux/cake/CakeAction'
import { buyIceCream } from '../redux/iceCream/iceCreamAction'

const ItemContainer = (props) => {
    return (
        <div>
            <h2>Item = {props.item}</h2>
            <button onClick={props.buyItems}>Buy Item</button>
        </div>
    )

}
const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake
        ? state.cake.numOfCake
        : state.iceCream.numOfIceCream

    return {
        item: itemState
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream())
    return {
        buyItem: dispatchFunction
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)