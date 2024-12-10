# TypeScript Optional Properties Runtime Error

This example demonstrates a potential runtime error that can occur in TypeScript when using optional properties. The `printName` function expects a `firstName` property, but the `lastName` property is optional. However, if the `firstName` property is missing in the input, it will throw a runtime error. 

The solution provides a safer approach that checks for the existence of the `firstName` property before accessing it.