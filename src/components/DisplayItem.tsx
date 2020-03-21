import * as React from 'react';
import { Product } from './CaloriesApp';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

interface DisplayItemProps {
    itemData: Product;
    deleteHandler: Function;
    id: number;
}

export default class DisplayItem extends React.Component<DisplayItemProps, {}>{

    render() {
        return (
            <TableRow key="sum">
                <TableCell>{this.props.itemData.Name}</TableCell>
                <TableCell>{this.props.itemData.Quantity}</TableCell>
                <TableCell>{this.props.itemData.Calorie}</TableCell>
                <TableCell>{this.props.itemData.Protein}</TableCell>
                <TableCell>{this.props.itemData.Carbohydrate}</TableCell>
                <TableCell>{this.props.itemData.Fat}</TableCell>
                <TableCell onClick={() => {
                    this.props.deleteHandler(this.props.id);
                }}>(delete)</TableCell>
            </TableRow>
        )
    }
}
/*
*/