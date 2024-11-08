## Understanding Union and Intersection Types in TypeScript


### Union Types (|)

A **union type** allows a variable to hold values of multiple types. It is created using the pipe `(|)` symbol. This is useful when a value could be one of several types.

For example, if ywe have a variable that can either be a string or a number:

```
let value: string | number;
value = "Hello";  
value = 42;     
```
In this example, `value` can be either a string or a number, giving flexibility while still ensuring type safety.


### Intersection Types (&)
An **intersection type** combines multiple types into one. It is created using the ampersand `(&)` symbol. It means the variable must have all the properties of the types involved. This is useful when you want a variable to meet multiple criteria.

For example, if we want a variable to be both a `Person` and `Employee`, you can use an intersection:

```
type Person = { name: string };
type Employee = { jobTitle: string };

let employee: Person & Employee = {
  name: "Alice",
  jobTitle: "Developer"
};
```
In this case, `employee` must have both `name` (from `Person`) and `jobTitle` (from `Employee`).