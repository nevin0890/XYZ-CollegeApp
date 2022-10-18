import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor(private api: ApiService) {
    this.fetchStudents()
   }
  
  fetchStudents = () => {
    this.api.getAllStudents().subscribe((data) => {
    this.studentData = data
   console.log(this.studentData) })
    

  }

    studentData: any =[]

  ngOnInit(): void {
  }

}
