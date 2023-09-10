import { Component, OnInit } from '@angular/core';
import { LoginspaceComponent } from './loginspace/loginspace.component';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  imports: [LoginspaceComponent],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
