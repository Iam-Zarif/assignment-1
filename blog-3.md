# Generics in TypeScript

## Introduction

When writing functions, we often repeat the same logic for different types.  
Like one function for numbers, another for strings… same logic, different types.  
This is where **Generics** come in.

Generics let you write flexible code **without losing type safety**.  
So you don’t have to choose between reusable code and strict typing — you get both.

---

## What actually is Generics?

Instead of fixing a type like `number` or `string`, we use a placeholder like `<T>`.

```ts
const identity = <T>(value: T): T => {
  return value;
};