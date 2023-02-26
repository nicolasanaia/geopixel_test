import { fireEvent, render, screen } from "@testing-library/react";
import { Ball } from ".";



it('should move when mouse is over', () => {
    const onMouseOver = jest.fn();
    render(
        <Ball onMouseOver={onMouseOver} x={0} y={0} marginX={0} />
    );

    const ball = screen.getByTestId('ball');

    fireEvent.mouseOver(ball);

    expect(onMouseOver).toHaveBeenCalled();
});