import PersonRenderer from './../renderer/person_renderer.js';
import Person from './../model/person.js';

export default class PersonController {
    constructor() {
        this.person = new Person('Sébastien');
    }

    setRenderer() {
        const renderer = new PersonRenderer();
        renderer.show(this.person.name, this.person.life);
    }


    setHandler() {
        $('#buttonLife').click(() => {
            this.person.looseLife(10);
            this.setRenderer();
        });
    }

    load() {
        let self = this;

        $('main').load('./html/person.html', function (response) {
            $('main').html(response);

            self.setRenderer();
            self.setHandler();
        });
    }
}