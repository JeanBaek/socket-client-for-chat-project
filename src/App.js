import React, {useState, useEffect} from "react";
import {socket} from "./socket";
import './App.css';
import {ConnectionState} from "./components/ConnectionState";
import {Messages} from "./components/Messages";
import {ConnectionManager} from "./components/ConnectionManager";
import {MyForm} from "./components/MyForm";

function App() {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onGetMessage(message) {
      setMessages(prev => [...prev, message]);
    }

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('chat message', onGetMessage);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('chat message', onGetMessage);
    };
  }, []);

  return (
    <main className="App grid h-screen w-screen grid-rows-6 bg-cyan-50">
      <ConnectionState isConnected={isConnected} />
      <Messages events={messages} />
      <MyForm />
      <ul>
      </ul>
    </main>
  );
}

export default App;
