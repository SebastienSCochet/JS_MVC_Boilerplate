import Person from './../model/person.js';
import Controller from './controller.js';
import DeadScreenRenderer from '../renderer/deadscreen_renderer.js';
import PersonController from '../controller/person_controller.js';

export default class DeadScreenController extends Controller {
    constructor(person) {
        super();
        this.person = person;
    }

    setRenderer() {
        const renderer = new DeadScreenRenderer();
        renderer.displayName(this.person.name); 
    }

    setHandler() {
        let self = this;

        $('#buttonRestart').click(() => {
            self.load('person', new PersonController());
        });
    }

}