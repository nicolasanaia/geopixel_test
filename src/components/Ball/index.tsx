import { BallProps } from "./interfaces";
import { Container } from "./styles";

export function Ball({ onMouseOver, x, y }: BallProps) {
    return (
        <Container onMouseOver={onMouseOver} x={x} y={y} />
    );
}