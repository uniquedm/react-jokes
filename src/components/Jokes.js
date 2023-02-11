import React from "react";
import Hide from "../images/hide.png"
import Show from "../images/show.png"

export default function Joke({setup, punchline}) {
    let [displayPunchline, setDisplay] = React.useState(false)

    function togglePunchline() {
        setDisplay(prevValue => !prevValue)
    }

    let imageUrl = displayPunchline ? Show : Hide;
    
    if (setup===undefined) {
        setup = punchline;
        punchline = "";
    }

    return (
        <div className="joke-card" onClick={togglePunchline}>
            <p>{setup}</p>
            {displayPunchline && <p className="punchline-text">{punchline}</p>}
            <div className="punchline-div">
            <button className="joke-button">
            <div>
                <img alt="Toggle Punchline" src={imageUrl} className="button-icon"/>
            </div>
            Punchline
            </button>
            </div>
        </div>
    )
}