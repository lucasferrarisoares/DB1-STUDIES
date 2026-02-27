export class ListNegociation {
    constructor() {
        this.negociations = [];
    }
    addNegociation(negociation) {
        this.negociations.push(negociation);
    }
    showNegociations() {
        return this.negociations;
    }
}
