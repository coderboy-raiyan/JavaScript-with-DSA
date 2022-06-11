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

// Object
