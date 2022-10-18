import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  constructor() { }
  name = ''
  roll = ''
  adno = ''
  college = ''
  department = ''
  bloodgroup = ''
  dob = ''
  parent= ''
  parent_email = ''
  guardian = ''
  guardian_address = ''
  parent_mobile=''

  readvalues = () => {
    let data = {
      name: this.name,
      roll: this.roll,
      adno: this.adno,
      college: this.college,
      department: this.department,
      bloodgroup: this.bloodgroup,
      dob: this.dob,
      parent: this.parent,
      parent_email: this.parent_email,
      guardian: this.guardian,
      guardian_address: this.guardian_address,
      parent_mobile: this.parent_mobile

    }
    console.log(data)
  }
  
  

  ngOnInit(): void {
  }

}
