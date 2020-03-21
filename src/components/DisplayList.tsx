import * as React from 'react';
import { Product } from './CaloriesApp';
import DisplayItem from './DisplayItem';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

interface DisplayListProps {
    items: Product[];
    deleteHandler: Function;
}

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export default class DisplayList extends React.Component<DisplayListProps, {}>{

    render() {
        return (
            <Table>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>Name</CustomTableCell>
                        <CustomTableCell>Quantity</CustomTableCell>
                        <CustomTableCell>Calories</CustomTableCell>
                        <CustomTableCell>Fat (g)</CustomTableCell>
                        <CustomTableCell>Carbs (g)</CustomTableCell>
                        <CustomTableCell>Protein (g)</CustomTableCell>
                        <CustomTableCell>Remove</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {this.props.items.map((item, index) => {
                        return <DisplayItem deleteHandler={this.props.deleteHandler} id={index} itemData={item} />
                    })}
                </TableBody>
            </Table>
        );
    }
}