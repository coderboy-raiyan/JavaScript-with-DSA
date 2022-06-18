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

const std = {
  name: "Ranbir Kapoor",
  email: "kapoor@gmail.com",
};

studentsObj["b39daa8b-0b57-410a-0a58-e50a1515e36c"] = {
  ...studentsObj["b39daa8b-0b57-410a-0a58-e50a1515e36c"],
  ...std,
};

console.log(studentsObj);

// const arr = [12, 34, 5, 6, false, NaN, "", 98];

// const result = arr.reduce((acc, curr, index) => {
//   if (curr) {
//     acc = [...acc, curr.toString()];
//   }

//   return acc;
// }, []);

// console.log(result);
