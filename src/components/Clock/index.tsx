import { useState } from "react";
import { Container } from "./styles";

export function Clock() {
    let time = new Date().toLocaleTimeString('pt-BR', {
        hour12: false,
    });

    const [current_time, setCurrentTime] = useState(time);

    const update_time = () => {
        let time = new Date().toLocaleTimeString('pt-BR', {
            hour12: false,
        });
        setCurrentTime(time);
    };

    setInterval(update_time, 1000);

    return (
        <Container>
            <h1>{current_time}</h1>
        </Container>
    );
}