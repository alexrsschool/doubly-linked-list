const Node = require('./node');
//https://learn.javascript.ru/array-methods
//https://itchief.ru/lessons/javascript/javascript-arrays-in-questions-and-answers
//https://learn.javascript.ru/es-class

class LinkedList {

    constructor() {
        this.list = [];
    }

    append(data) {
        let newnode = new Node(data);
        this.list.push(newnode);
        return this;
    }

    head() {
        if (this.list[0]) return this.list[0].data;
        else return null;
    }

    tail() {
        let lenght = this.list.length;
        if (this.list[lenght - 1]) return this.list[lenght - 1].data;
        else return null;
    }

    at(index) {
        return this.list[index].data;
    }

    insertAt(index, data) {
        this.list.splice(index, 0, new Node(data));
        return this;
    }

    isEmpty() {
        if (this.list.length === 0) return true;
        else return false;
    }

    clear() {
        this.list.length = 0;
        return this;
    }


    deleteAt(index) {
        this.list.splice(index, 1);
        return this;
    }

    reverse() {
        this.list.reverse();
        return this;
    }

    indexOf(data) {
        for (let arr of this.list) {
            if (arr.data === data) {
                return this.list.indexOf(arr, 0);
            }
        }
        return -1;
    }

// создаем геттеры
    get _head() {
        return this.list[0];
    }

    get _tail() {
        return this.list[this.list.length - 1];
    }

    get length() {
        return this.list.length;
    }
//---------------
}

module.exports = LinkedList;