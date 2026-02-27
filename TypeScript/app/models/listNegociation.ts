import { Negociation } from "./negociation.js";

export class ListNegociation {
    private negociations: Negociation[] = [];

    addNegociation(negociation: Negociation) {
        this.negociations.push(negociation);
    }

    showNegociations(): readonly Negociation[] {
        return this.negociations;
    }
}