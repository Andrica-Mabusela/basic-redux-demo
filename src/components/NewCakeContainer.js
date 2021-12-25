import React, { useState } from 'react';
import { buyCake } from '../redux/cake/cakeActions';
import { useSelector, useDispatch } from 'react-redux';


const NewCakeContainer = () => {

    const [number, setNumber] = useState(1);
    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return (<div>
            <h2>The Number of cakes is { numOfCakes }</h2>
            <input type="text" placeholder="enter number of cakes" value={number} onChange={(e) => setNumber(e.target.value)} />
            <button onClick={() => dispatch(buyCake(number))} >buy { number } cake</button>
    </div>);
};





export default NewCakeContainer;