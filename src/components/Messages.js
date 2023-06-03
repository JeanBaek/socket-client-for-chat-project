import React from "react";

export function Messages({events}) {
    return (
        <ul className="row-span-5 flex-grow text-gray-900">
            {
                events.map((event, i) => (
                    <li key={i}>{event}</li>
                ))
            }
        </ul>
    );
}