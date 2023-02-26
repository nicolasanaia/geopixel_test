import { useState } from "react";
import { Container } from "./styles";

export function Clock() {
    // criei uma let com a hora atual para que possa ser alterada
    let time = new Date().toLocaleTimeString('pt-BR', {
        hour12: false,
    });

    // usei useState e armazenei o valor de time
    const [currentTime, setCurrentTime] = useState(time);

    // criei uma função para que ele atualize o estado com a hora atual
    const update_time = () => {
        let time = new Date().toLocaleTimeString('pt-BR', {
            hour12: false,
        });
        setCurrentTime(time);
    };

    // chamei a função setInterval, nativa do js, para atualizar o tempo a cada 1 segundo
    setInterval(update_time, 1000);

    return (
        <Container>
            <h1>{currentTime}</h1>
        </Container>
    );
}