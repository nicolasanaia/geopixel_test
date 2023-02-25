import { useState } from 'react';
import { Button, ButtonContainer, Container, Input, ItemList, SelectedItem } from './styles';

export function Selector() {
    const [items, setItems] = useState(['Item 1']);
    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    const handleNewInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleAddClick = () => {
        if (inputValue.trim() !== '') {
            const newItem = inputValue.trim();
            if (!items.includes(newItem)) {
                setItems([...items, newItem]);
                setInputValue('');
                window.alert(`Item "${newItem}" adicionado com sucesso!`);
            } else {
                window.alert(`O item "${newItem}" já existe na lista.`);
            }
        }
    };

    const handleRemoveClick = () => {
        if (selectedItem) {
            const remaining_items = items.filter((item) => item !== selectedItem);
            setItems(remaining_items);
            setInputValue('');
            setSelectedItem('');
            window.alert(`Item "${selectedItem}" removido com sucesso!`);
        }
        if (inputValue) {
            const remaining_items = items.filter((item) => item !== inputValue);
            setItems(remaining_items);
            setInputValue('');
            setSelectedItem('');
            window.alert(`Item "${inputValue}" removido com sucesso!`);
        }
    };

    const handleClearClick = () => {
        setInputValue('');
    };

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedItem(event.target.value);
    };

    return (
        <Container>
            <h1>Lista de Itens</h1>
            <ItemList value={selectedItem} onChange={handleSelect}>
                <option value="" selected disabled>
                    Selecione um item
                </option>
                {items.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </ItemList>
            <Input
                type="text"
                placeholder="Insira um item"
                value={inputValue}
                onChange={handleNewInput}
            />
            <ButtonContainer>
                <Button onClick={handleAddClick}>Adicionar</Button>
                <Button onClick={handleRemoveClick}>Remover</Button>
                <Button onClick={handleClearClick}>Limpar</Button>
            </ButtonContainer>
            <SelectedItem>{selectedItem ? `Item selecionado: ${selectedItem}` : 'Nenhum item selecionado'}</SelectedItem>
        </Container>
    );
};
