import React from 'react'
import { connect } from 'react-redux';
import { buyCake } from '../redux/cake/cakeActions';
import { buyIceCream } from '../redux/iceCream/iceCreamAction';

function ItemContainer(props) {
    return (
        <div>
            <h2>Item - { props.item } </h2>
            <button onClick={ props.buyItem }>buy item</button>
        </div>
    )
}

function mapStateToProps(state, ownProps){
    // conditionally set component state to cake or ice cream
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;

    return {
        item: itemState
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream());

    return {
        buyItem: dispatchFunction
    }
}
// in order to only dispatch actions without subscribing to the store for changes, pass null as first argument
export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
