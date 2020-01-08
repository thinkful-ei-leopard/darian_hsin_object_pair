//Object creator

function createMyObject(){
    return {
        foo:"bar",
        answerToUniverse:42,
        'olly olly':"oxen free",
        sayHello: function(){
            return "Hellp"
        }
    }
}

//Object updater

function updateObject(obj){
    
        obj.foo = "foo";
        obj.bar = "bar";
        obj.bizz = "bizz";
        obj.bang = "bang";

        return obj;
    
}

//Self-reference
ffunction personMaker() {
    // eslint-disable-next-line indent
    var person = {
      firstName: 'Paul',
      lastName: 'Jones',
      // replace `null` with a function that uses self reference to return
      // full name
      fullName: function() {
          return this.firstName + ' ' + this.lastName;
    }
}
return person;
}
console.log(personMaker())

 //Deleting keys   
  const sampleObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang',
  };
  
  function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;
    return obj
  }
  
  console.log(keyDeleter(sampleObj))

//Make student reports

function makeStudentReport(data){
    return data.map(d => `${d.name}: ${d.grade}`);
}

//Enroll in summer school
const studentData = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];
function enrollInSummnerSchool(students){
   return students.map(student => {
    return {
        name: student.name,
        status: 'In Summer school',
        course: student.course,
      };
   })
}

//Find by id

const scratchData = [
    { id: 22, foo: 'bar' },
    { id: 28, foo: 'bizz' },
    { id: 19, foo: 'bazz' },
  ];
  
  function findById(items, idNum) {
    for (let i=0; i<item.length; i++ )
    if(idNum === itema[i].id){
        return item[i]
    }
  }
 
 
//Validate object keys
const objectA = {
    id: 2,
    name: 'Jane Doe',
    age: 34,
    city: 'Chicago',
  };
  
  // running the function with `objectB` and `expectedKeys`
  // should return `false`
  const objectB = {
    id: 3,
    age: 33,
    city: 'Peoria',
  };
  
  const expectedKeys = ['id', 'name', 'age', 'city'];
  
  function validateKeys(object, expectedKeys) {
    if (Object.keys(object).length !== expectedKeys.length) {
        return false;
      }
  }
 
