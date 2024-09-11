import { Component } from '@angular/core';
import { AuthenticateService } from 'src/app/Service/authenticate-service.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {


  isSidebarActive = false;

  toggleSidebar() {
    this.isSidebarActive = !this.isSidebarActive;
  }

  constructor(
    private service: AuthenticateService,
  ){}

  onLogout(): void {
    this.service.logout();
  }
  

  ngOnInit(): void {
    
  }


}