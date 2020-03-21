import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

interface SummaryProps {
    calories: number;
    proteins: number;
    carbs: number;
    fat: number;
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

export const Summary: React.FC<SummaryProps> = (props) => {
    return (
        <Paper>
            <Table>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>Dessert (100g serving)</CustomTableCell>
                        <CustomTableCell>Calories</CustomTableCell>
                        <CustomTableCell>Fat (g)</CustomTableCell>
                        <CustomTableCell>Carbs (g)</CustomTableCell>
                        <CustomTableCell>Protein (g)</CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow key="sum">
                        <TableCell component="th" scope="row">
                            Sum
                                </TableCell>
                        <TableCell>{props.calories}</TableCell>
                        <TableCell>{props.fat}</TableCell>
                        <TableCell>{props.carbs}</TableCell>
                        <TableCell>{props.proteins}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </Paper>
    );
}