'use strict';

let loaf = {
  flour: 300,
  water: 210,
  hydration: function () {
    return (this.water/this.flour) * 100;}    
};

console.log (`${loaf.flour} ${loaf.water}`);
console.log (loaf.hydration());

const obj = {
  foo: 'Whats up',
  bar: 'Oh really?',
  fum: 'fries',
  quux: 'potato',
  spam: 'snow!'
};
  
for (const key in obj) {
  obj.hasOwnProperty(key)
    ? console.log(obj[key])
    : console.log('No property on key');
}

'use strict';

let food = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']

};

console.log(food.meals[3]);

'use strict';
const arrayOfObjects = [
  { name: 'Captain America', jobTitle: 'Hero', boss: 'Nick Fury' },
  { name: 'Spiderman', jobTitle: 'Hero', boss: 'Nick Fury' },
  { name: 'Thanos', jobTitle: 'World Destroyer'},
  { name: 'Green Goblin', jobTitle: 'villian'}
];

for (const person of arrayOfObjects) {
  person.hasOwnProperty('boss')
    ? console.log(`${person.jobTitle} ${person.name} reports to ${person.boss}`)
    : console.log(`${person.jobTitle} ${person.name} reports to no one`);
}

const stringToDecode = 'craft block argon meter bells brown croon droop';
const cipher = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
function decodeString(string) {
  const stringSplitArr = string.split(' ');

  const newArr = [];
  stringSplitArr.forEach(character => newArr.push(decodeCharacter(character)));
  return newArr.join('');
}
function decodeCharacter(word) {
  if (Object.keys(cipher).find(key => key === word.charAt(0))) {
    return word[cipher[word.charAt(0)]];
  } else {
    return ' ';
  }
}

console.log(decodeString(stringToDecode));

'use strict';
function createCharacter(lotrCharObj){
  return {
    name: lotrCharObj.name, 
    nickName: lotrCharObj.nickName,
    race: lotrCharObj.race,
    origin: lotrCharObj.origin,
    attack: lotrCharObj.attack,
    defense: lotrCharObj.defense,
    weapon: lotrCharObj.weapon,
    describe: function(){
      return `${this.name} is a ${this.race} from ${this.origin} who uses a ${this.weapon}`;   
    },
    

    evaluateFight: function(characterObj){
      const characterAttack= lotrCharObj.attack;
      //console.log(characterAttack);
      const characterDefense= lotrCharObj.defense;
      const enemyAttack= characterObj.defense;
      console.log(enemyAttack);
      const enemyDefense=characterObj.defense;
      //This is opponent damage
      let x = characterAttack-enemyDefense;
      //This is self damage
      let y= enemyAttack-characterDefense;
      if (enemyAttack < characterDefense){
        //takes no damage
        y = 0;
        return `Your opponent takes ${x} damage and you receive  ${y} damage.`;
      }else if(characterAttack < enemyDefense) {
        x = 0;
        return `Your opponent takes ${x} damage and you receive  ${y} damage.`;
      } else {
        return `Your opponent takes ${x} damage and you receive  ${y} damage.`;
      }
      

    }
  };
}

const Gandalf = {
  name: 'Gandalf the White',
  nickName: 'gandalf',
  race:'Wizard',
  origin:'Middle Earth',
  attack: 10,
  defense: 6,
  weapon: 'Staff'
};


const Bilbo = {
  name: 'Bilbo Baggins',
  nickName: 'bilbo',
  race:'Hobbit',
  origin:'The Shire',
  attack: 2,
  defense: 1,
  weapon: 'Ring'
};


const Frodo = {
  name: 'Frodo Baggins',
  nickName: 'frodo',
  race:'Hobbit',
  origin:'The Shire',
  attack: 3,
  defense: 2,
  weapon: 'Sting'
};

const Aragorn= {
  name: 'Aragorn son of Arathorn ',
  nickName: 'aragorn',
  race:'Man',
  origin:'Dunnedain',
  attack: 6,
  defense: 8,
  weapon: 'Anduril'
};

const Legolas= {
  name: 'Legolas',
  nickName: 'legolas',
  race:'Elf',
  origin:'Woodland Realm',
  attack: 8,
  defense: 5,
  weapon: 'Bow and Arrow'
};


const Arwen= {
  name: 'Arwen Undomiel',
  nickName: 'arwen',
  race:'Elf',
  origin:'RivenDell',
  attack: 15,
  defense: 9,
  weapon: 'Hadhafang'
};

const characters = 
[createCharacter(Gandalf), 
  createCharacter(Bilbo), 
  createCharacter(Frodo), 
  createCharacter(Aragorn), 
  createCharacter(Legolas), 
  createCharacter(Arwen)];

console.log(characters);
characters.find(character => {
  return character.nickName === 'aragorn';
}).describe();

const hobbits = characters.filter(character => character.race === 'Hobbit');
const highAttack = characters.filter(character => character.attack > 5);
console.log(highAttack);
console.log(characters[0].describe());

const Database = {
  store: {
    heroes: [
      { id: 1, name: 'Captain America', squad: 'Avengers' },
      { id: 2, name: 'Iron Man', squad: 'Avengers' },
      { id: 3, name: 'Spiderman', squad: 'Avengers' },
      { id: 4, name: 'Superman', squad: 'Justice League' },
      { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
      { id: 6, name: 'Aquaman', squad: 'Justice League' },
      { id: 7, name: 'Hulk', squad: 'Avengers' }
    ]
  },
  findOne: function(query) {
    for (let hero of this.store.heroes) {
      if (
        Object.keys(query).every(
          key => hero.hasOwnProperty(key) && hero[key] === query[key]
        )
      )
        return hero;
    }
    return null;
  }
};
  
console.log(Database.findOne({ id: 2 }));

