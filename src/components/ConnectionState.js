import React from "react";
import {ConnectionManager} from "./ConnectionManager";

export function ConnectionState({isConnected}) {
    return (
        <header className="flex gap-4 flex-col items-center justify-center bg-amber-200 p-5">
            <h2 className="text-3xl">소켓 연결: {'' + isConnected}</h2>
            <ConnectionManager />
        </header>
    )

}