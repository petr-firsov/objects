const hero = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
const mainArgs = ["name", "level"];

let result = [];

function orderByProps(object, mainArgs) {
    for (let i = 0; i < mainArgs.length; i++) {   
        let item = {};
        let a = mainArgs[i];
        item.key = a;
        item.value = object[a];
        result.push(item);
    }

    const { name, level, ...data} = hero;
    let temporaryArray = [];
    for (property in data) {
        if (!mainArgs.includes(property)) {
            let item = {};
            item.key = property;
            item.value = object[property];
            temporaryArray.push(item);
        }
    }
    temporaryArray.sort();
    temporaryArray.forEach(element => result.push(element));
}

orderByProps(hero, mainArgs);
console.log(result);



const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон'
      }, 
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...'
        // <- обратите внимание, описание "засекречено"
      }
    ]	
  }

  function extractData(object) {
    const { special: array } = object;
    array.forEach(element => { 
        const { id: id, name: name, icon: icon, description: description = 'Описание недоступно'} = element;
        let attackChoice = [];
        attackChoice.push(id, name, icon, description);
        console.log(attackChoice);
    })   
  }

  extractData(character);
