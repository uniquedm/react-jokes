import React from "react";

export default function Joke({setup, punchline}) {
    if (setup===undefined) {
        setup = punchline;
        punchline = "";
    }
    return (
        <div className="joke-card">
            <p>{setup}</p>
            <h5>{punchline}</h5>
        </div>
    )
}