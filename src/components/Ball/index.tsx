import { BallProps } from "./interfaces";
import { Container } from "./styles";

export function Ball({ onMouseOver, x, y, marginX }: BallProps) {
    return (
        <Container onMouseOver={onMouseOver} x={x} y={y} marginX={marginX} />
    );
}