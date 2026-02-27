export class Negociation {
    constructor(
        public readonly _date: Date,
        public readonly quantity: number,
        public readonly value: number
    ) {}

    get volume(): number { return this.value * this.quantity; }
    
    get data(): Date {
        const date = new Date(this._date.getTime());
        return date;
    }
}