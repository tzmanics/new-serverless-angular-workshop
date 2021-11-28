import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Observable } from 'rxjs';

import { RolesListService } from 'src/app/services/roles-list.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  rolesList!: Observable<any[]>;
  userId: string = 'userId';
  isAdmin: boolean = false;

  constructor(
    public auth: AuthService,
    private rolesListService: RolesListService
  ) {}

  ngOnInit(): void {
    this.auth.user$.subscribe((user) => (this.userId = user!.sub!));
  }

  checkIsAdmin(userId: string): void {
    this.rolesListService
      .getRolesList(userId)
      .subscribe((roles) =>
        roles.some((x) => x.name === 'admin')
          ? (this.isAdmin = true)
          : alert('⛔️ You do not have Admin privlidges. ⛔️')
      );
  }
}
