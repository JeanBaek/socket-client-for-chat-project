import React from "react";
import {socket} from "../socket";

export function ConnectionManager() {
    function connect() {
        socket.connect();
    }

    function disconnect() {
        socket.disconnect();
    }

    return (
        <div className="flex gap-4">
            <button className="border bg-white rounded-full p-4" onClick={connect}>Connect</button>
            <button className="border bg-white rounded-full p-4" onClick={disconnect}>Disconnect</button>
        </div>
    )
}