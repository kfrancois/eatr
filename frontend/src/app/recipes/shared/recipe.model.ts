import { User } from '../../user/shared/user.model';
import { Ingredient } from './ingredient.model';

export class Recipe {


    private _id: string;
    private _name: string;
    private _user: User;
    private _people: number;
    private _category: string;
    private _image: string;
    private _description: string;
    private _time: string; // TODO misschien veranderen naar aparte prep time & totale time
    private _steps: string[];
    private _ingredients: Ingredient[];

    constructor(name: string, user: User, people: number, category: string, image: string, description: string,
        time: string, steps: string[], ingredients: Ingredient[]) {

        this._name = name;
        this._user = user;
        this._people = people;
        this._category = category;
        this._image = image;
        this._description = description;
        this._time = time;
        this._steps = steps;
        this._ingredients = ingredients;
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this._name;
    }
    set name(name: string) {
        this._name = name;
    }

    get user(): User {
        return this._user;
    }

    get people(): number {
        return this._people;
    }

    set people(people: number) {
        this._people = people;
    }

    get category(): string {
        return this._category;
    }
    set category(category: string) {
        this._category = category;
    }

    get image(): string {
        return this._image;
    }
    set image(image: string) {
        this._image = image;
    }

    get description(): string {
        return this._description;
    }
    set description(description: string) {
        this._description = description;
    }

    get time(): string {
        return this._time;
    }

    set time(time: string) {
        this._time = time;
    }
    get steps(): string[] {
        return this._steps;
    }
    set steps(steps: string[]) {
        this._steps = steps;
    }

    get ingredients(): Ingredient[] {
        return this._ingredients;
    }

    set ingredients(ingredients: Ingredient[]) {
        this._ingredients = ingredients;
    }

    static fromJSON(json): Recipe {
        const recipe = new Recipe(json.name, json.user, json.people, json.category, json.image,
            json.description, json.time, json.steps, json.ingredients);
        recipe._id = json._id;
        return recipe;
    }

    toJSON() {
        return {
            _id: this._id,
            name: this._name,
            user: this._user,
            people: this._people,
            category: this._category,
            image: this._image,
            description: this._description,
            time: this._time,
            steps: this._steps,
            ingredients: this._ingredients
        };
    }

}
