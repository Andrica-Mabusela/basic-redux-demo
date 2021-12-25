import React from 'react'
import { buyIceCream } from '../redux/iceCream/iceCreamAction';
import { connect } from 'react-redux';

function IceCreamContainer(props) {
    return (
        <div>
            <h2>The number of ice creams is { props.numOfIceCreams }</h2>
            <button onClick={props.buyIceCream}>buy ice cream</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch( buyIceCream() )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
