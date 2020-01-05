import * as React from 'react'

interface SummaryProps {
    calories: number;
    proteins: number;
    carbs: number;
    fat: number;
}

export const Summary: React.FC<SummaryProps> = (props) => {

    return (
        <ul>
            <li>Calories: {props.calories}</li>
            <li>Proteins: {props.proteins}</li>
            <li>Carbs: {props.carbs}</li>
            <li>Fat: {props.fat}</li>
        </ul>
    );
}