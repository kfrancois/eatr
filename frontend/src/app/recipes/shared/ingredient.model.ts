export class Ingredient {

    private _id: string;
    private _name: string;
    private _amount: number;
    private _unit: string;


    constructor(name: string, amount: number, unit: string) {
        this._name = name;
        this._amount = amount;
        this._unit = unit;
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
    get amount(): number {
        return this.amount;
    }
    get unit(): string {
        return this.unit;
    }

    static fromJSON(json): Ingredient {
        const ingredient = new Ingredient(json.name, json.amount, json.unit);
        ingredient._id = json._id;
        return ingredient;
    }

    toJSON() {
        return {
            _id: this._id,
            name: this._name,
            amount: this.amount,
            unit: this.unit
        };
    }

}
