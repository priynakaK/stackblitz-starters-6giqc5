import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';

@Component({
  standalone: true,
  selector: 'app-loginspace',
  templateUrl: './loginspace.component.html',
  styleUrls: ['./loginspace.component.css'],
  imports: [HomepageComponent],
})
export class LoginspaceComponent implements OnInit {
  constructor(private _router: Router) {}

  submit() {
    this._router.navigate([HomepageComponent]);
  }

  ngOnInit() {}
}
