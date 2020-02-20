import * as React from 'react';
import axios from 'axios';
import { Product } from './CaloriesApp';

interface AddItemProps {
    addHandler: Function;
}

interface AddItemState {

}

export const AddItem: React.FC<AddItemProps> = (props) => {
    const [itemName, setItemName] = React.useState<string>();
    const [itemQty, setItemQty] = React.useState<number>();
    const [currentSearchString, setCurrentSearchString] = React.useState<string>();
    const [allAutoCompleteItems, setAllAutoCompleteItems] = React.useState<Product[]>([]);
    const [autoCompleteItems, setAutoCompleteItems] = React.useState<Product[]>([]);

    function getItems(firstLetters: string) {
        //debugger;
        let firstLetter = firstLetters.substring(0, 1);
        if (currentSearchString !== firstLetter) {
            setCurrentSearchString(firstLetter);
            axios.get('http://localhost:3000/filteredProducts/' + firstLetter, {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                }
            }).then(res => {
                console.log(res);
                let data = res.data.data as Product[];
                setAllAutoCompleteItems(data);
                let filteredItems = data.filter(function (product) {
                    return product.Name.toLowerCase().startsWith(firstLetters.toLowerCase());
                });
        
                setAutoCompleteItems(filteredItems);
            });
        } else {
            let filteredItems = allAutoCompleteItems.filter(function (product) {
                return product.Name.toLowerCase().startsWith(firstLetters.toLowerCase());
            });
    
            setAutoCompleteItems(filteredItems);
        }
    }

    return (
        <>
            Name: <input onChange={(evt: React.ChangeEvent<HTMLInputElement>) => {
                if (evt.currentTarget.value.length >= 1) {
                    getItems(evt.currentTarget.value);
                } else {
                    setAllAutoCompleteItems([]);
                    setAutoCompleteItems([]);
                }
                setItemName(evt.currentTarget.value)
            }} />
            <br />
            Q-ty <input value={itemQty} type="number" onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setItemQty(evt.currentTarget.valueAsNumber)} />
            <br />
            <button onClick={() => {
                if (itemName !== null && itemQty !== null) {
                    props.addHandler(itemName, itemQty);
                    setItemName("");
                    setItemQty(0);
                }
            }}>Add</button>
            {autoCompleteItems.map((item) => {
                return(<>
                    <span>{item.Name}</span>
                    <br />
                </>)
            })}
        </>
    )
}