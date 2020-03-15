export default class PersonRenderer {
    constructor() {
    }

    displayInfo(name, life) {
        $('#name').html(`<p>Nom : ${name}</p>`);
        $('#life').html(`<p>Vie : ${life}</p>`);

        $('#life').css('background-color', 'green');
        $('#life').css('width', life * 5 + 'px');

        if(life < 40) {
            $('#life').css('background-color', 'red');
        }
    }
    
}