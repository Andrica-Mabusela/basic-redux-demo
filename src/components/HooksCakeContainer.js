import { buyCake } from "../redux/cake/cakeActions";
import { useSelector, useDispatch  } from 'react-redux';

const HooksCakeContainer = () => {

    const numOfCakes = useSelector(state => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return (<div>
        <h2>numOfCakes value is {numOfCakes}</h2>
        <button onClick={ () => dispatch(buyCake()) }>buy cake</button>
    </div>);
}

export default HooksCakeContainer;

