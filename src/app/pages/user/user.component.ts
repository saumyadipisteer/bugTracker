import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  currentRouter: string;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.currentRouter = this.router.url.split('/').splice(-1)[0];
  }
}
