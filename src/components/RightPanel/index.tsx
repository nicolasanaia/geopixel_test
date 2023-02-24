import { useState } from "react";
import { Ball } from "../Ball";
import { Position } from "./interfaces";
import { RightPanelContainer } from "./styles";

const getRandomPosition = (): Position => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
});

export function RightPanel() {
    const [position, setPosition] = useState<Position>(getRandomPosition());

    const handleMouseMove = () => {
        setPosition(getRandomPosition());
    };

    return (
        <RightPanelContainer>
            <Ball onMouseOver={handleMouseMove} x={position.x} y={position.y} />
        </RightPanelContainer>
    )
}