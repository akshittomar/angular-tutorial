

// ...existing code...
This is Angular Tutorial Project !!!!
Variable Decleration and All Related to it is in Variable Decleration Component
// ...existing code...

# Variable Declaration — Concepts & Examples THIS IS MY TODO 

- Syntax: `variableName: dataType = initialValue;`  
  Example: `name: string = 'John';`

- Basic types:
  - `string`, `number`, `boolean`
  - Arrays: `hobbies: string[] = ['reading', 'coding'];`
  - Objects: `user: { name: string; age: number } = { name: 'John', age: 30 };`

- Access modifiers:
  - `public` (default), `protected` (visible in class & subclasses), `private` (class only)
  - Example: `protected title = 'app';`

- Read-only:
  - `readonly PI: number = 3.14;` — cannot be changed after initialization

- Variable declarations inside methods:
  - `let` — block scoped
  - `const` — block scoped, immutable reference
  - `var` — function scoped (avoid when possible)

- Functions / Methods:
  - Method with typed parameters: `add(a: number, b: number) { return a + b; }`
  - Template strings: ``alert(`The sum of ${a} and ${b} is ${a + b}`);``

- Other common variables in Angular:
  - `@Input()` — input property from parent
  - `@Output()` — event emitter to parent
  - Template reference variables: `<input #cityInput />` → use `cityInput.value`
  - Signals: `count = signal(0);` and computed signals `computed(() => ...)`
  - Observables / Subjects for async streams

Keep variables type-safe and prefer `let` / `const` and TypeScript typing for clarity and maintainability.