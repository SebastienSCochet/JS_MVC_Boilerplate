export default class Person {
    constructor(name, life = 100) {
        this.name = name;
        this.life = life;
    }

    isDead = () => this.life === 0;

    looseLife(pv) {
        this.life -= pv;
    }

}