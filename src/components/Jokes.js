import React from "react";

export default function Joke({setup, punchline, flipCard, display}) {
    if (setup===undefined) {
        setup = punchline;
        punchline = "";
    }
    return (
        <div className="joke-card" onClick={flipCard}>
            <p>{setup}</p>
            {display && <h5>{punchline}</h5>}
        </div>
    )
}