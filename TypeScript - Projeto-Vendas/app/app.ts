import { NegociationController } from "./controllers/negociationController.js";

const negociationController = new NegociationController();
const form = document.querySelector('.form');
form.addEventListener('submit', event => {
    negociationController.add()
})