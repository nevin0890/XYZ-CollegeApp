import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private myrouter: Router) { }
  
  Username = ''
  Password = ''

  readvalues = () => {
    let data = {
      Username: this.Username,
      Password: this.Password
    }
    if (this.Username == "admin" && this.Password == "admin") {
      this.myrouter.navigate(["/dashboard"])
    }
    else {
      alert("invalid credentials!!!")
    }
    console.log(data)
  }



  ngOnInit(): void {
  }

}
