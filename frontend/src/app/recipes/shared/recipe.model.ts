import { Step } from './step.model';

export class Recipe {

    private _id: string;
    private _name: string;
    private _category: string;
    private _image: string;
    private _description: string;
    private _steps: Step[];

    constructor(name: string, category: string, image: string, description: string, steps?: Step[]) {
        this._name = name;
        this._category = category;
        this._image = image;
        this._description = description;
        this._steps = steps || new Array<Step>();
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

    get steps(): Step[] {
        return this._steps;
    }
    set steps(steps: Step[]) {
        this._steps = steps;
    }

    static fromJSON(json): Recipe {
        const recipe = new Recipe(json.name, json.category, json.image, json.description, json.steps);
        recipe._id = json._id;
        return recipe;
    }

    toJSON() {
        return {
            _id: this._id,
            name: this._name
        };
    }

}
