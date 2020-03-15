import PersonController from './controller/person_controller.js';

$(function () {

    let personController = new PersonController();

    personController.load();

})
