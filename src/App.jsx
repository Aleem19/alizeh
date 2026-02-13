//src/App.jsx
import React, { useState } from "react";
import Landing from "./components/Landing";
import Valentine from "./components/Valentine";

export default function App() {
    const [showValentine, setShowValentine] = useState(false);

    const handleReadyClick = () => {
        setShowValentine(true);
    };

    if (showValentine) {
        return <Valentine />;
    }

    return <Landing onReady={handleReadyClick} />;
}