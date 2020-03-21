import * as React from 'react';
import { Product } from './CaloriesApp';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

interface AddItemProps {
    addHandler: Function;
    items: Product[];
}

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
        marginLeft: 10
    }
}));

export const AddItem: React.FC<AddItemProps> = (props) => {
    const [selectedItem, setSelectedItem] = React.useState<number>(1);
    const [itemName, setItemName] = React.useState<string>();
    const [itemQty, setItemQty] = React.useState<number>();
    const classes = useStyles();

    return (
        <Paper>
            <Autocomplete
                
                clearOnEscape
                key={"autoComplete" + selectedItem}
                options={props.items}
                getOptionLabel={option => option.Name}
                style={{ width: 300, marginLeft: 10 }}
                renderInput={params =>
                    <TextField {...params} label="Select Item"
                        margin="normal"
                        variant="outlined"
                        onBlur={(evt: any) => {
                            setItemName(evt.target.value);
                        }}
                    />
                }
            />
            <TextField
                id="standard-number"
                label="Quantity"
                type="number"
                style={{ width: 300, marginLeft: 10 }}
                value={itemQty}
                onChange={
                    (evt: React.ChangeEvent<HTMLInputElement>) => {
                        setItemQty(evt.currentTarget.valueAsNumber);
                    }
                }
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            /><br />
            <Button variant="contained" size="large" color="primary" className={classes.margin} onClick={() => {
                if (itemName !== null && itemQty !== null) {
                    props.addHandler(itemName, itemQty);
                    setSelectedItem(selectedItem + 1);
                    setItemQty(0);
                }
            }}>
                Add Item
            </Button>
        </Paper>
    )
}