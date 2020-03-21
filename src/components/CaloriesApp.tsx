import * as React from 'react';
import { Summary } from './Summary';
import { AddItem } from './AddItem';
import DisplayList from './DisplayList';
import axios from 'axios';

interface CaloriesAppProps {

}

interface CaloriesAppState {
    sumCalories: number;
    sumProteins: number;
    sumCarbs: number;
    sumFat: number;
    items: Product[];
    calorieData: Product[];
}

export interface Product {
    Id: number;
    Name: string;
    Quantity: number;
    Calorie: number;
    Protein: number;
    Carbohydrate: number;
    Fat: number;
}

export default class CaloriesApp extends React.Component<CaloriesAppProps, CaloriesAppState>{
    constructor(props: CaloriesAppProps) {
        super(props);
        this.state = {
            sumCalories: 0,
            sumProteins: 0,
            sumCarbs: 0,
            sumFat: 0,
            items: [],
            calorieData: []
        }
        axios.get('http://localhost:3000/products', {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }).then(res=>{
            console.log(res);
            let data = res.data.data as Product[];
            this.setState({calorieData: data});
        });
    }

    async getItemByName(name: string) {
        let results = await axios.get('http://localhost:3000/product/' + name, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        });
        let data = results.data.data as Product;
        return data;
    }

    async addItemHandler(itemName: string, itemQty: number) {
        let item = await this.getItemByName(itemName);
        if (item !== undefined) {
            let addItem: Product = this.convertValues(item, itemQty);
            let items = this.state.items;
            items.push(addItem);
            this.setState({items: items});
            this.refreshSums();
        } else {
            alert(`item ${itemName} not found.`);
        }
    }

    deleteItemHandler = (id: number) => {
        let items = this.state.items;
        items.splice(id, 1);
        this.setState({items: items});
        this.refreshSums();
    }

    refreshSums = () => {
        let calories = this.state.items.reduce((a,b) => +a + +b.Calorie, 0);
        let proteins = this.state.items.reduce((a,b) => +a + +b.Protein, 0);
        let carbs = this.state.items.reduce((a,b) => +a + +b.Carbohydrate, 0);
        let fat = this.state.items.reduce((a,b) => +a + +b.Fat, 0);
        this.setState({
            sumCalories: +(calories).toFixed(2),
            sumProteins: +(proteins).toFixed(2),
            sumCarbs: +(carbs).toFixed(2),
            sumFat: +(fat).toFixed(2)
        })
    }

    render() {
        return (
            <>
                <Summary calories={this.state.sumCalories} proteins={this.state.sumProteins} carbs={this.state.sumCarbs} fat={this.state.sumFat} />
                <AddItem addHandler={this.addItemHandler.bind(this)} items={this.state.calorieData} />
                <DisplayList items={this.state.items} deleteHandler={this.deleteItemHandler} />
            </>
        );
    }

    convertValues = (item: Product, qty: number): Product => {
        let coeff = qty / (item.Quantity);
        return {
            ...item,
            Quantity: qty,
            Calorie: +(item.Calorie * coeff).toFixed(2),
            Protein: +(item.Protein * coeff).toFixed(2),
            Carbohydrate: +(item.Carbohydrate * coeff).toFixed(2),
            Fat: +(item.Fat * coeff).toFixed(2)
        }
    }
}


/*const calorieData: IItemData[] = [
    { name: "Rice", qty: 100, calories: 340, proteins: 7.4, carbs: 75.5, fat: 0.55 },
    { name: "Red Lentils", qty: 100, calories: 337, proteins: 26, carbs: 47, fat: 1.6 },
    { name: "Pasta", qty: 100, calories: 350, proteins: 12.5, carbs: 70.5, fat: 1.2 },
    { name: "Chicken Breast", qty: 120, calories: 198, proteins: 37, carbs: 0, fat: 4.3 },
    { name: "Chicken Leg", qty: 258, calories: 475, proteins: 62, carbs: 0, fat: 23 },
    { name: "Egg", qty: 50, calories: 72, proteins: 6.3, carbs: 0.4, fat: 4.8 },
    { name: "Salmon", qty: 227, calories: 468, proteins: 50, carbs: 0, fat: 28 },
    { name: "Mushrooms", qty: 12, calories: 3.4, proteins: 0.3, carbs: 0.6, fat: 0.1 },
    { name: "Mozzarella", qty: 28, calories: 85, proteins: 6.3, carbs: 0.6, fat: 6.3 },
    { name: "Red Pepper", qty: 114, calories: 32, proteins: 1, carbs: 7.6, fat: 0.2 },
    { name: "Green Pepper", qty: 114, calories: 32, proteins: 1, carbs: 7.6, fat: 0.2 },
    { name: "Yellow Pepper", qty: 186, calories: 50, proteins: 1.9, carbs: 12, fat: 0.4 },
    { name: "Aubergine", qty: 566, calories: 198, proteins: 4.7, carbs: 49, fat: 1.3 },
    { name: "Courgette", qty: 217, calories: 33, proteins: 2.5, carbs: 5.8, fat: 0.8 },
    { name: "Can Tomato", qty: 100, calories: 20, proteins: 0.9, carbs: 3.8, fat: 0.1 },
    { name: "Garlic Clove", qty: 3, calories: 4.5, proteins: 0.2, carbs: 1, fat: 0 },
    { name: "Olive Oil", qty: 100, calories: 822, proteins: 0, carbs: 0, fat: 91.3 },
    { name: "Onion", qty: 94, calories: 41, proteins: 1.3, carbs: 9.5, fat: 0.2 },
    { name: "Sour Cream", qty: 100, calories: 188, proteins: 2.3, carbs: 4.2, fat: 18 },
    { name: "Carrot", qty: 46, calories: 16, proteins: 0.3, carbs: 3.8, fat: 0.1 },
    { name: "Pancetta", qty: 150, calories: 466, proteins: 16, carbs: 0.5, fat: 27 },
    { name: "Tomato Concentrate", qty: 100, calories: 97, proteins: 5.6, carbs: 14, fat: 1.5 },
    { name: "Beef Mince", qty: 113, calories: 308, proteins: 31, carbs: 0, fat: 20 },
    { name: "Beef-Pork Mince", qty: 100, calories: 308, proteins: 10.3, carbs: 0.2, fat: 30 },
    { name: "Pork Mince", qty: 85, calories: 252, proteins: 22, carbs: 0, fat: 18 },
    { name: "Tomato", qty: 100, calories: 19, proteins: 0.9, carbs: 2.9, fat: 0.2 },
    { name: "Sugar", qty: 5, calories: 20, proteins: 0, carbs: 5, fat: 0 },
    { name: "Sweetcorn", qty: 100, calories: 52, proteins: 1.6, carbs: 8.1, fat: 0.2 },
    { name: "Red Beans", qty: 100, calories: 101, proteins: 8.1, carbs: 12, fat: 0.6 },
    { name: "Milk", qty: 100, calories: 49, proteins: 3, carbs: 4.7, fat: 2 },
    { name: "Cheese", qty: 28, calories: 113, proteins: 6.4, carbs: 0.9, fat: 9.3 },
    { name: "Wholemeal Flour", qty: 100, calories: 331, proteins: 13, carbs: 59, fat: 2.1 },
    { name: "Wheat Flour", qty: 100, calories: 345, proteins: 11, carbs: 70, fat: 1.7 },
    { name: "Rapeseed Oil", qty: 100, calories: 900, proteins: 0, carbs: 0, fat: 100 }
    // { name: "", qty: , calories: , proteins: , carbs: , fat: },
    // { name: "", qty: , calories: , proteins: , carbs: , fat: },
    // { name: "", qty: , calories: , proteins: , carbs: , fat: },


];*/