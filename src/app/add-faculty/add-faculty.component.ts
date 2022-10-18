import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {

  constructor() { }

  Name = ''
  department = ''
  dob = ''
  qualification = ''
  address = ''
  mobile = ''
  doj = ''
  
  readvalues = () => {
    let data = {
      Name: this.Name,
      department: this.department,
      dob: this.dob,
      qualification: this.qualification,
      address: this.address,
      mobile: this.mobile,
      doj: this.doj
    }
    console.log(data)
  }
  
  

  ngOnInit(): void {
  }

}
