"use strict";
class list {
    constructor() {
        this.myTasks = [];
        console.log("The list is empty now.\n");
    }
    addTasks(newTask) {
        newTask.done = false;
        this.myTasks.push(newTask);
    }
    removeTask(oldTask) {
        const index = this.myTasks.indexOf(oldTask);
        if (index != 1)
            this.myTasks.splice(index, 1);
    }
    doTask(name) {
        for (let i = 0; i < this.myTasks.length; i++) {
            if (this.myTasks[i].name == name)
                this.myTasks[i].done = true;
        }
    }
}
let myList = new list();
myList.addTasks({ name: "puetzen", done: false, hoursNeeded: 2 });
myList.addTasks({ name: "kaufen", done: true, hoursNeeded: 1 });
console.log(myList);
myList.doTask("kaufen");
console.log(myList);
