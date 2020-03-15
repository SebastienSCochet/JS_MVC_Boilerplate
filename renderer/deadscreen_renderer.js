export default class DeadScreenRenderer {
    constructor() {
    }

    /**
     * Set the value of the name span from deadscreen.html
     * @param {String} name 
     */
    displayName(name) {
        $('#name').text(name);
    }
    
}