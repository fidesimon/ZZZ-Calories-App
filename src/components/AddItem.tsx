import * as React from 'react'

interface AddItemProps {
    addHandler: Function;
}

interface AddItemState {

}

export const AddItem: React.FC<AddItemProps> = (props) => {
    const [itemName, setItemName] = React.useState<string>();
    const [itemQty, setItemQty] = React.useState<number>();

    return (
        <>
            Name: <input value={itemName} onChange={(evt:React.ChangeEvent<HTMLInputElement>)=>setItemName(evt.currentTarget.value)} />
            <br />
            Q-ty <input value={itemQty} type="number" onChange={(evt:React.ChangeEvent<HTMLInputElement>)=>setItemQty(evt.currentTarget.valueAsNumber)} />
            <br />
            <button onClick={() => {
                if (itemName !== null && itemQty !== null) {
                    props.addHandler(itemName, itemQty);
                    setItemName("");
                    setItemQty(0);
                }
            }}>Add</button>
        </>
    )
}