import React from "react";

export function Events({events}) {
    return (
        <ul>
            {
                events.map((event, i) => (
                    <li key={i}>{event}</li>
                ))
            }
        </ul>
    );
}