import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import { Clock } from '.';

describe('Clock component', () => {
    it('renders correctly', () => {
        render(<Clock />)

        let time = `${new Date().toLocaleTimeString('pt-BR', {
            hour12: false,
        })}`;

        const clockCurrentTime = screen.getByText(time)
        expect(clockCurrentTime).toBeInTheDocument()
    })
})
