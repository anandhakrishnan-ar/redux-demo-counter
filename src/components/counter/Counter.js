import React from 'react'
import '../counter/Counter.css'
const Counter = () => {
    return (
        <div className="card">
            <div className="card-header">
                Counter
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-md-12 counter-text">
                        <span>0</span>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-success">Increment</button>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-danger">Decrement</button>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-success">Increment by 5</button>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-primary">Toggle Counter</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Counter
