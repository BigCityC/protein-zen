import { useState } from "react";

export default function HomePage() {
    const [hideText, setHideText] = useState(true);

    function handleToggleHide(event) {
        setHideText(!hideText);
    }

    return (<>
        <p>{hideText ? <p>Protien HomePage</p> : <p>Hidden</p>}</p>
        <btn onClick={handleToggleHide}>Show/Hide</btn>
    </>)
}