import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Selector } from '.';

describe('Selector component', () => {
    beforeEach(() => {
        window.alert = jest.fn();
    })

    it('renders correctly', () => {
        render(<Selector />);

        const selectItem = screen.getByText('Selecione um item');
        expect(selectItem).toBeInTheDocument();
    })

    it('adds a new item to the list', () => {
        render(<Selector />);

        const itemToAdd = 'Item 2';
        const input = screen.getByPlaceholderText('Insira um item') as HTMLInputElement;
        const addButton = screen.getByText('Adicionar');

        fireEvent.change(input, { target: { value: itemToAdd } });
        fireEvent.click(addButton);

        const itemToAddElement = screen.queryByText(itemToAdd);
        expect(itemToAddElement).toBeInTheDocument();
    })

    it('removes an item from the list through input', () => {
        render(<Selector />);

        const input = screen.getByPlaceholderText('Insira um item') as HTMLInputElement;
        const itemToRemove = 'Item 1';
        const removeButtonElement = screen.getByText('Remover');

        fireEvent.change(input, { target: { value: itemToRemove } });
        fireEvent.click(removeButtonElement);

        const itemToRemoveElement = screen.queryByText(itemToRemove);
        expect(itemToRemoveElement).not.toBeInTheDocument();
    })

    it('removes an item from the list through selector', () => {
        render(<Selector />);

        const itemToRemove = 'Item 1';
        const selectElement = screen.getByTestId('select') as HTMLSelectElement;

        const removeButtonElement = screen.getByText('Remover');

        fireEvent.change(selectElement, { target: { value: itemToRemove } });
        fireEvent.click(removeButtonElement);

        const itemToRemoveElement = screen.queryByText(itemToRemove);
        expect(itemToRemoveElement).not.toBeInTheDocument();
    })

    it('clears the input field', () => {
        render(<Selector />);

        const input = screen.getByPlaceholderText('Insira um item') as HTMLInputElement;
        const clearButton = screen.getByText('Limpar');

        fireEvent.change(input, { target: { value: 'Testing' } });
        fireEvent.click(clearButton);

        expect(input.value).toBe('');
    });
})