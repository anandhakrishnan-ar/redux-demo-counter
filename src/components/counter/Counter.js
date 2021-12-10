import React from 'react'
import '../counter/Counter.css'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByValue, toggleCounter } from '../../store/counter-slice'
const Counter = () => {
    const counter = useSelector(state => state.counter.counter);
    const showCounter = useSelector(state => state.counter.isShown);
    const dispatch = useDispatch();
    const incrementCounter = () => {
        dispatch(increment());
    }
    const decrementCounter = () => {
        dispatch(decrement());
    }
    const incrementCounterBy5 = () => {
        dispatch(incrementByValue(5));
    }
    const toggle = () => {
        dispatch(toggleCounter());
    }
    return (
        <div className="card">
            <div className="card-header">
                Counter
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12 counter-text">
                        {showCounter && <span>{counter}</span>}
                    </div>
                    <div className="col-md-12">
                        <button className="btn btn-primary col-md-2 m-3" onClick={toggle}>Toggle Counter</button>
                        {showCounter && <button className="btn btn-success col-md-2 m-3" onClick={incrementCounter}>Increment</button>}
                        {showCounter && <button className="btn btn-danger col-md-2 m-3" onClick={decrementCounter}>Decrement</button>}
                        {showCounter && <button className="btn btn-success col-md-2 m-3" onClick={incrementCounterBy5}>Increment by 5</button>}
                    </div>
                   
                   
                </div>

            </div>
        </div>
    )
}

export default Counter
