## ✨ ১. TypeScript-এ Interface এবং Type এর মধ্যে পার্থক্য

TypeScript-এ `interface` এবং `type` দুটোই object-এর structure নির্ধারণ করতে ব্যবহৃত হয়। তবে কিছু পার্থক্য আছে:

```ts
interface User {
  name: string;
  age: number;
}

type ID = string | number;
type Point = [number, number];
```

Interface merge হয়, Type নয়। Extends করার নিয়মও ভিন্ন:

```ts
interface A { a: number }
interface B { b: number }

interface C extends A, B {
  c: number;
}

type D = A & B & { c: number };
```

---

## ✨ ২. TypeScript-এ `keyof` এর ব্যবহার

`keyof` কোনো object type-এর সব key-এর union type তৈরি করে:

```ts
type User = {
  name: string;
  age: number;
  role: string;
};

type UserKeys = keyof User; // "name" | "age" | "role"
```

keyof কেন দরকার?

এটি দিয়ে আমরা এমন function বানাতে পারি যা object থেকে শুধুমাত্র valid key অ্যাক্সেস করতে দেবে

```ts
function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { name: "Rahim", age: 25 };

getValue(user, "name"); // valid
getValue(user, "email"); // ❌ error — কারণ email key নেই

```
এটি TypeScript-এর type safety অনেক বাড়িয়ে দেয়
