export default class Person {
    constructor(name, life = 100) {
        this.name = name;
        this.life = life;
    }

    looseLife(pv) {
        this.life -= pv;
    }

}