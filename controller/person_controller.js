import Controller from './controller.js';
import DeadScreenController from './deadscreen_controller.js';
import PersonRenderer from './../renderer/person_renderer.js';
import Person from './../model/person.js';

export default class PersonController extends Controller {
    constructor() {
        super();
        this.person = new Person('Sébastien');
    }

    setRenderer() {
        const renderer = new PersonRenderer();
        renderer.displayInfo(this.person.name, this.person.life);
    }

    setHandler() {
        let self = this;

        $('#buttonLife').click(() => {
            this.person.looseLife(10);
            this.setRenderer();

            if(this.person.isDead()) {
                self.load('deadscreen', new DeadScreenController(self.person));
            }
        });
    }

}