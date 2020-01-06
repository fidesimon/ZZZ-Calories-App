import * as React from 'react';
import IItemData from './IItemData';
import DisplayItem from './DisplayItem';

interface DisplayListProps {
    items: IItemData[];
}

export default class DisplayList extends React.Component<DisplayListProps, {}>{

    render() {
        return (
            <table>
                <thead>
                    <th>Name</th>
                    <th>Qty</th>
                    <th>Calories</th>
                    <th>Protein</th>
                    <th>Carbs</th>
                    <th>Fat</th>
                </thead>
                {this.props.items.map((item) => {
                    <tr>
                        <DisplayItem itemData={item} />
                    </tr>
                })}
            </table>
        );
    }
}