import React, {useState} from "react";
import {socket} from "../socket";

export function MyForm() {
    const [value, setValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function onSubmit(event) {
        event.preventDefault();
        setIsLoading(true);

        socket.timeout(500).emit('chat message', value, () => {
            setIsLoading(false);
        });
    }

    return (
        <form className="row-span-1 flex items-center justify-center gap-4 border-t-2 bg-white text-gray-900" onSubmit={onSubmit}>
            <input
                autoComplete="off"
                placeholder={isLoading ? 'Connecting...' : 'Enter your message'}
                className="h-[75%] w-[75%] rounded-full border border-2 p-10"
                onChange={(e) => setValue(e.target.value)}
            />
            <button
                type="submit"
                className="h-[75%] w-[15%] rounded-full border border-2 text-3xl"
                disabled={isLoading}
            >
                Send
            </button>
        </form>
    );
}