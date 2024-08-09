import { test, expect } from 'vitest';
import { compareShoppingListItems } from "./main.js";



test("return a value of 2 and the matching items", () => {

    const myList = ["apple", "banana", "pear"];
    const shopsItems = ["apple", "banana", "orange"];
    const result = compareShoppingListItems(myList, shopsItems);
    expect(result).toEqual({ count: 2, items: ["apple", "banana"] });
    
});

test("return all items", () => {

    const myList = ["burgers", "lettus", "chips", "fizzy", "cake"];
    const shopsItems = ["cake", "burgers","chips", "lettus", "fizzy", ];
    const result = compareShoppingListItems(myList, shopsItems);
    expect(result).toBe('We all good');

});

test("return no items", () => {

    const myList = ["apple", "banana", "pear"];
    const shopsItems = ["jucie", "milk", "ice cream"];
    const result = compareShoppingListItems(myList, shopsItems);
    expect(result).toBe('We have a problem');
    
});

