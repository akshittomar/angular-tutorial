import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-model-tutorial',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ng-model-tutorial.html',
  styleUrls: ['./ng-model-tutorial.css']
})
export class NgModelTutorial {
  // Property to bind with ngModel for two-way data binding
  userInput: string = '';
}
