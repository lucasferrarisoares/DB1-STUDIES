export class Negociation {
    constructor(_date, quantity, value) {
        this._date = _date;
        this.quantity = quantity;
        this.value = value;
    }
    get volume() { return this.value * this.quantity; }
    get data() {
        const date = new Date(this._date.getTime());
        return date;
    }
}
