export default class Controller {
    constructor() {}
    
    setRenderer() {}

    setHandler() {}

    /**
     * Change the content of the <main> from index.html to the specified page.
     * Execute the dynamic rendering of the page then init set the handlers. 
     * @param {String} name : part of the html url
     * @param {T extends Controller} controller : controller of the page
     */
    load(name, controller) {
        let self = this;

        $('main').load('./html/' + name + '.html', function (response) {
            $('main').html(response);
 
            console.log(controller);

            controller.setRenderer();
            controller.setHandler();
        });
    }
}