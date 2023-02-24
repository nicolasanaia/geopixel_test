import { BallProps } from "./interfaces";
import { Container } from "./styles";

export function Ball({ onMouseOver, x, y, margin }: BallProps) {
    return (
        <Container onMouseOver={onMouseOver} x={x} y={y} margin={margin} />
    );
}