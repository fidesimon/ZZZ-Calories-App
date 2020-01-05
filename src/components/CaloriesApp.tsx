import * as React from 'react';

interface CaloriesAppProps{

}

interface CaloriesAppState{
    sumCalories: number;
    sumProteins: number;
    sumCarbs: number;
    sumFat: number;
}

export default class CaloriesApp extends React.Component<CaloriesAppProps, CaloriesAppState>{
    constructor(props: CaloriesAppProps){
        super(props);
        this.state = {
            sumCalories: 0,
            sumProteins: 0,
            sumCarbs: 0,
            sumFat: 0
        }
    }

    render(){
        return (
            <>
            </>
        );
    }
}