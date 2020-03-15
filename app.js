import Controller from './controller/controller.js';
import PersonController from './controller/person_controller.js';

$(function () {

    let controller = new Controller();

    controller.load('person', new PersonController());

})
