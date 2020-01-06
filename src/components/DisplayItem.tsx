import * as React from 'react';
import IItemData from './IItemData';

interface DisplayItemProps {
    itemData: IItemData;
    deleteHandler: Function;
    id: number;
}

export default class DisplayItem extends React.Component<DisplayItemProps, {}>{

    render() {
        return (
            <tr>
                <td>{this.props.itemData.name}</td>
                <td>{this.props.itemData.qty}</td>
                <td>{this.props.itemData.calories}</td>
                <td>{this.props.itemData.proteins}</td>
                <td>{this.props.itemData.carbs}</td>
                <td>{this.props.itemData.fat}</td>
                <td onClick={()=>{
                    this.props.deleteHandler(this.props.id);
                }}>(delete)</td>
            </tr>
        )
    }
}