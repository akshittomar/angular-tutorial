import { Component , Input} from '@angular/core';


@Component({
  selector: 'app-child-component',
  imports: [],
  templateUrl: './child-component.html',
  styleUrl: './child-component.css'
})
export class ChildComponent {
@Input() name:string='Default Nmae';
@Input() article!:{id:number,name:string,price:number,discount:number};
/**
 * /*
Definite assignment (!) in TypeScript:
In `@Input() article!: {...}`, the `!` is the definite assignment assertion.
It tells the compiler "this will be assigned later (after construction)".
It has no runtime effect — if the value is actually undefined at runtime,
you can still get errors.

Example:
@Input() article!: { id: number; name: string; price: number; discount: number };


Optional chaining (?.):
`a?.b` safely returns `undefined` when `a` is null or undefined,
otherwise returns `a.b`.

Useful in Angular templates while inputs are not yet set.
Limitations:
- Only checks for null/undefined, not other falsy values.
- Cannot be used on the left side of assignments.

Example (template):
{{ article?.name }}


Provide fallbacks:
Combine optional chaining with the nullish coalescing operator (??)
to supply default values.

Example:
{{ article?.name ?? 'Unknown' }}


Template guarding:
Use `*ngIf` when you need to render multiple bindings safely.

Example:
<div *ngIf="article">{{ article.name }} - {{ article.price }}</div>


Summary / limits:
- `!` only silences the compiler; it does not prevent runtime undefined errors.
- `?.` prevents runtime errors when the base is null/undefined, but:
  * Cannot be used for assignments.
  * Does not guard against other falsy values.
*/

 
}
