import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewstudent',
  templateUrl: './viewstudent.component.html',
  styleUrls: ['./viewstudent.component.css']
})
export class ViewstudentComponent implements OnInit {

  constructor(private api: ApiService) {
    // this.fetchStudents()
   }
  
  // fetchStudents = () => {
  //   this.api.getAllStudents().subscribe((data) => {
  //   this.studentData = data
  //  console.log(this.studentData) })
    

  // }

  studentData: any = [
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
     { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' }, ,
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' },
    { 'Name': 'Raju', 'RollNo': '1', 'AdmissionNo': '1001', 'Department': 'Computer', 'College': 'ABC', 'DOB': '22-12-2010', 'Address': 'Pulikkal(h)', 'ParentName': 'Vinod', 'Mobile': '997845985', 'Blood': 'O+' },
    { 'Name': 'Manu', 'RollNo': '2', 'AdmissionNo': '1002', 'Department': 'Chemical Engineering', 'College': 'CDE', 'DOB': '23-06-2008', 'Address': 'Thekkel(h)', 'ParentName': 'Manoj', 'Mobile': '947845985', 'Blood': 'A+' }
    ]

  ngOnInit(): void {
  }

}
