import {useSelector , useDispatch} from 'react-redux';
import { decrement, increment } from '../Slices/CounterSlice';

const Button = () => {
    const counter = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();


    return (
        <div>
            <button
            onClick={() => dispatch(increment())}
            >+</button>
            <br/>
            <div>{counter}</div>
            <br/>
            <button
            onClick={() => dispatch(decrement())}
            >-</button>
        </div>
    )
}

export default Button;