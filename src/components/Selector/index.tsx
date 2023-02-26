import { useState } from 'react';
import { Button, ButtonContainer, Container, Input, ItemList, SelectedItem } from './styles';

export function Selector() {
    // inicializei os estados pros items, com um item padrão inserido
    // pros valores que serão inseridos no input de texto
    // e pro item selecionado no select
    const [items, setItems] = useState(['Item 1']);
    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    // essa função é acionada quando há uma mudança no valor de input
    const handleNewInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    // essa função verifica se o usuário está tentando adicionar algum texto no input que não
    // esteja vazio e valida se o item já existe na lista atual
    // caso não exista, ele insere
    const handleAddClick = () => {
        const newItem = inputValue.trim();
        if (newItem !== '') {
            if (!items.includes(newItem)) {
                setItems([...items, newItem]);
                setInputValue('');
                window.alert(`Item "${newItem}" adicionado com sucesso!`);
            } else {
                window.alert(`O item "${newItem}" já existe na lista.`);
            }
        }
    };

    // essa função lida com as remoções feitas tanto pelo input quanto pelo select
    // ela valida se o usuário está com um input ou se está com um 
    // item selecionado quando clica no botão de Remover, para que então ele remova o item
    // dando preferência para o que está no input, ou seja, se ele estiver com um item selecionado
    // e ao mesmo tempo com um texto no input, ele vai remover o que estiver no input e não o selecionado
    const handleRemoveClick = () => {
        if (inputValue) {
            const remainingItems = items.filter((item) => item !== inputValue);
            setItems(remainingItems);
            setInputValue('');
            setSelectedItem('');
            window.alert(`Item "${inputValue}" removido com sucesso!`);
        } else if (selectedItem) {
            const remainingItems = items.filter((item) => item !== selectedItem);
            setItems(remainingItems);
            setInputValue('');
            setSelectedItem('');
            window.alert(`Item "${selectedItem}" removido com sucesso!`);
        }

    };

    // essa função é acionada ao clicar no botão de Limpar, limpandou o input
    const handleClearClick = () => {
        setInputValue('');
    };

    // essa função é acionada quando um item é selecionado
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedItem(event.target.value);
    };

    return (
        <Container>
            <h1>Lista de Itens</h1>
            <ItemList data-testid='select' value={selectedItem} onChange={handleSelect}>
                <option value='' disabled>
                    Selecione um item
                </option>
                {items.map(item => (
                    <option key={item} value={item}>
                        {item}
                    </option>
                ))}
            </ItemList>
            <Input
                type='text'
                placeholder='Insira um item'
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
