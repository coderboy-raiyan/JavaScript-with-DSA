const axios = require("axios").default;

/*
 Difference between Array and Object DSA 
*/

// unique Id generator
function uuid(mask = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx") {
  return `${mask}`.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c == "x" ? r : (r && 0 * 3) | (0 * 8);
    return v.toString(16);
  });
}

// Array
/*
 * Some operation we can play on Array and their complexity
   
  1. Filter -> o(n)
  2. Delete -> o(n)
  3. Update -> o(n)
  4. create a new One -> o(1)


*/

const studentsArray = [
  {
    id: "467b0622-89e5-4ed2-0b9a-fe33c3770ba9",
    name: "Raiyan",
    email: "raiyan@gmail.com",
  },
  {
    id: "4353c672-34d6-41c5-00c2-6c61b6e14c04",
    name: "Turno",
    email: "turno@gmail.com",
  },
  {
    id: "6ea88336-9e0b-4b28-0526-c17964404b66",
    name: "Ruhul",
    email: "ruhul@gmail.com",
  },
  {
    id: "b39daa8b-0b57-410a-0a58-e50a1515e36c",
    name: "Jisun",
    email: "jisun@gmail.com",
  },
];

// Object

/*
 * Some operation we can play on Object and their complexity
   
  1. Filter -> o(n)
  2. Delete -> o(1)
  3. Update -> o(1)
  4. create a new One -> o(1)

*/

const studentsObj = {
  "467b0622-89e5-4ed2-0b9a-fe33c3770ba9": {
    id: "467b0622-89e5-4ed2-0b9a-fe33c3770ba9",
    name: "Raiyan",
    email: "raiyan@gmail.com",
  },
  "4353c672-34d6-41c5-00c2-6c61b6e14c04": {
    id: "4353c672-34d6-41c5-00c2-6c61b6e14c04",
    name: "Turno",
    email: "turno@gmail.com",
  },
  "6ea88336-9e0b-4b28-0526-c17964404b66": {
    id: "6ea88336-9e0b-4b28-0526-c17964404b66",
    name: "Ruhul",
    email: "ruhul@gmail.com",
  },
  "b39daa8b-0b57-410a-0a58-e50a1515e36c": {
    id: "b39daa8b-0b57-410a-0a58-e50a1515e36c",
    name: "Jisun",
    email: "jisun@gmail.com",
  },
};

// My reduce function implementation
const myReducer = (array, cb, init) => {
  let acc = init;

  for (let i = 0; i < array.length; i++) {
    acc = cb(acc, array[i], i, array);
  }

  return acc;
};

const sum = myReducer(
  [1, 2, 3],
  (acc, curr) => {
    return (acc += curr);
  },
  0
);

// console.log(sum);

// How to made a Array from Object. The array object comes from fake DB

async function madeArrayToObject() {
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );

    /*
    * Map related way

     const neededData = data.slice(0, 10).map((post) => {
      return {
        id: post.id,
        title: post.title,
        userId: post.userId,
      };
    });

    const newObj = {};

    neededData.forEach((element) => {
      newObj[element.id] = {
        ...element,
      };
    }); 

     */

    const newObj = data.slice(0, 10).reduce((acc, curr) => {
      acc[curr.id] = curr;
      delete curr.body;
      return acc;
    }, {});

    return newObj;
  } catch (error) {
    console.log(err);
  }
}
madeArrayToObject().then((data) => console.log(data));

// Make a list of phone book
const numbers = [
  "Raiyan",
  "Ruhul",
  "Ratul",
  "Aryaan",
  "Adiba",
  "Jiulie",
  "Jaine",
  "Oscar",
];

const list = numbers.reduce((acc, curr) => {
  const letters = curr[0];

  if (letters in acc) {
    acc[letters] = [...acc[letters], curr];
  } else {
    acc[letters] = [curr];
  }

  return acc;
}, {});

Object.keys(list).forEach((letter) => {
  console.log(letter + " " + list[letter]);
});
