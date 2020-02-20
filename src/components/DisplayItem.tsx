import * as React from 'react';
import { Product } from './CaloriesApp';

interface DisplayItemProps {
    itemData: Product;
    deleteHandler: Function;
    id: number;
}

export default class DisplayItem extends React.Component<DisplayItemProps, {}>{

    render() {
        return (
            <tr>
                <td>{this.props.itemData.Name}</td>
                <td>{this.props.itemData.Quantity}</td>
                <td>{this.props.itemData.Calorie}</td>
                <td>{this.props.itemData.Protein}</td>
                <td>{this.props.itemData.Carbohydrate}</td>
                <td>{this.props.itemData.Fat}</td>
                <td onClick={()=>{
                    this.props.deleteHandler(this.props.id);
                }}>(delete)</td>
            </tr>
        )
    }
}