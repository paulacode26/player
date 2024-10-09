import { useRef, useState } from "react";
//to use useRef, we also need to use useState to show the varible inf in the DOM
//
const Player = () => {
    const playerName = useRef();
    const [enteredName, setEnterName] = useState(null); // 1. variable (enteredName), 2. function (setEnterName). To update the variable, we call the function.

    function handleClick() {
        console.log(playerName.current.value)
        setEnterName(playerName.current.value);
        playerName.current.value='' // clean the input after click the button

    }

    return ( 
        <section style={{ textAlign: 'center' }}>
            <h2>Welcome {enteredName ? enteredName : 'unknown'}</h2>
            {/*<h2>Welcome {playerName.current.value? playerName.current.value:'unknow'}</h2>*/}
            {/*<h2>Welcome {playerName.current ? playerName.current.value : 'unknown'}</h2>*/}
            <input ref={playerName} type="text" />
            <button onClick={handleClick}>Set Name</button>
        </section>
    );
}

export default Player;
