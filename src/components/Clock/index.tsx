import { useState } from "react";

export function Clock() {
    let time = new Date().toLocaleTimeString('en-US', {
        hour12: false,
    });

    const [current_time, setCurrentTime] = useState(time);

    const update_time = () => {
        let time = new Date().toLocaleTimeString('en-US', {
            hour12: false,
        });
        setCurrentTime(time);
    };

    setInterval(update_time, 1000);

    return (
        <div>
            <h1>{current_time}</h1>
        </div>
    );
}