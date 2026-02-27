import { ListNegociation } from "../models/listNegociation.js";
import { Negociation } from "../models/negociation.js";

export class NegociationController {
    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negociations = new ListNegociation();

    constructor() {
        this.inputDate = document.querySelector('#data');
        this.inputQuantity = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }

    add(): void {
        const negociation = this.createNegociation();
        this.negociations.addNegociation(negociation);
        console.log(this.negociations);
        this.clearForm();
        console.log(this.negociations);
    }

    createNegociation(): Negociation {
        const exp =/-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseFloat(this.inputValue.value);
        return new Negociation(date, quantity, value);
    }

    clearForm(): void {
        this.inputDate.value = '';
        this.inputQuantity.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}