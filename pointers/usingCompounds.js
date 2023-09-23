let obj1 = { value: 22 };
let obj2 = obj1;

/**
 * When we change the value of obj1 here, it affects obj2 because the assignment type here is by reference
 * obj2 is storing its value by taking the reference / space of obj1 in memory and not its value
 */

console.log(obj2.value) // 22

obj1.value = 40

console.log(obj2.value) // 40

// The process of reclaiming allocated memory that is no longer needed in JavaScript is Garbage Collection. (clearing an unassigned value from the memory)