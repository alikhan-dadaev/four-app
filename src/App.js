import React, {useState} from 'react';

function App(props) {
    const [numb, setNumb] = useState(0)

    function plus(){
        setNumb(numb + 3)
    }
    function minus(){
       if (numb > 0) {
           setNumb(numb - 2);
       }
    }
    function reset(){
        setNumb(0)
    }
    return (

            <div className="app">
                <div className="number">
                    {numb}
                </div>
                <div className="buttons">
                    <button onClick={plus}>plus</button>
                    <button onClick={minus}>minus</button>
                    <button onClick={reset}>rest</button>
                </div>

            </div>

    );
}

export default App;