import { ListNegociation } from "../models/listNegociation.js";
import { Negociation } from "../models/negociation.js";
export class NegociationController {
    constructor() {
        this.negociations = new ListNegociation();
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    add() {
        const negociation = this.createNegociation();
        this.negociations.addNegociation(negociation);
        console.log(this.negociations);
        this.clearForm();
        console.log(this.negociations);
    }
    createNegociation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negociation(date, quantity, value);
    }
    clearForm() {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
