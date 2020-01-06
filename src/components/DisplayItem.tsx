import * as React from 'react';
import IItemData from './IItemData';

interface DisplayItemProps {
    itemData: IItemData;
}

export default class DisplayItem extends React.Component<DisplayItemProps, {}>{

    render() {
        return (
            <>
                <td>{this.props.itemData.name}</td>
                <td>{this.props.itemData.grams}</td>
                <td>{this.props.itemData.calories}</td>
                <td>{this.props.itemData.proteins}</td>
                <td>{this.props.itemData.carbs}</td>
                <td>{this.props.itemData.fat}</td>
            </>
        )
    }
}