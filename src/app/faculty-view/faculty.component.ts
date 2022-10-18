import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor(private api: ApiService) {
    // this.fetchFaculty()
   }
  
  // fetchFaculty = () => {
  //   this.api.getallfaculty().subscribe((data) => { this.facultydata = data })
  // }

  facultydata: any = [
    { 'Name': 'Raju', 'Designation': 'Ass.Professor', 'Educational': 'MCA', 'Department': 'Computer', 'DOB': '12-12-1980', 'DOJ': '22-12-2010', 'Address': 'Pulikkal(h)', 'Mobile': '997845985', },
    { 'Name': 'Manu', 'Designation': 'Professor', 'Educational': 'M.Tech', 'Department': 'Chemical Engineering', 'DOB': '10-11-1980', 'DOJ': '23-06-2008', 'Address': 'Thekkel(h)', 'Mobile': '947845985', },
    { 'Name': 'Raju', 'Designation': 'Ass.Professor', 'Educational': 'MCA', 'Department': 'Computer', 'DOB': '12-12-1980', 'DOJ': '22-12-2010', 'Address': 'Pulikkal(h)', 'Mobile': '997845985', },
    { 'Name': 'Manu', 'Designation': 'Professor', 'Educational': 'M.Tech', 'Department': 'Chemical Engineering', 'DOB': '10-11-1980', 'DOJ': '23-06-2008', 'Address': 'Thekkel(h)', 'Mobile': '947845985', },
    { 'Name': 'Raju', 'Designation': 'Ass.Professor', 'Educational': 'MCA', 'Department': 'Computer', 'DOB': '12-12-1980', 'DOJ': '22-12-2010', 'Address': 'Pulikkal(h)', 'Mobile': '997845985', },
    { 'Name': 'Manu', 'Designation': 'Professor', 'Educational': 'M.Tech', 'Department': 'Chemical Engineering', 'DOB': '10-11-1980', 'DOJ': '23-06-2008', 'Address': 'Thekkel(h)', 'Mobile': '947845985', },
    { 'Name': 'Raju', 'Designation': 'Ass.Professor', 'Educational': 'MCA', 'Department': 'Computer', 'DOB': '12-12-1980', 'DOJ': '22-12-2010', 'Address': 'Pulikkal(h)', 'Mobile': '997845985', },
    { 'Name': 'Manu', 'Designation': 'Professor', 'Educational': 'M.Tech', 'Department': 'Chemical Engineering', 'DOB': '10-11-1980', 'DOJ': '23-06-2008', 'Address': 'Thekkel(h)', 'Mobile': '947845985', },
    { 'Name': 'Raju', 'Designation': 'Ass.Professor', 'Educational': 'MCA', 'Department': 'Computer', 'DOB': '12-12-1980', 'DOJ': '22-12-2010', 'Address': 'Pulikkal(h)', 'Mobile': '997845985', },
    { 'Name': 'Manu', 'Designation': 'Professor', 'Educational': 'M.Tech', 'Department': 'Chemical Engineering', 'DOB': '10-11-1980', 'DOJ': '23-06-2008', 'Address': 'Thekkel(h)', 'Mobile': '947845985', },
    { 'Name': 'Raju', 'Designation': 'Ass.Professor', 'Educational': 'MCA', 'Department': 'Computer', 'DOB': '12-12-1980', 'DOJ': '22-12-2010', 'Address': 'Pulikkal(h)', 'Mobile': '997845985', },
    { 'Name': 'Manu', 'Designation': 'Professor', 'Educational': 'M.Tech', 'Department': 'Chemical Engineering', 'DOB': '10-11-1980', 'DOJ': '23-06-2008', 'Address': 'Thekkel(h)', 'Mobile': '947845985', },
    { 'Name': 'Raju', 'Designation': 'Ass.Professor', 'Educational': 'MCA', 'Department': 'Computer', 'DOB': '12-12-1980', 'DOJ': '22-12-2010', 'Address': 'Pulikkal(h)', 'Mobile': '997845985', },
    { 'Name': 'Manu', 'Designation': 'Professor', 'Educational': 'M.Tech', 'Department': 'Chemical Engineering', 'DOB': '10-11-1980', 'DOJ': '23-06-2008', 'Address': 'Thekkel(h)', 'Mobile': '947845985', },
    { 'Name': 'Raju', 'Designation': 'Ass.Professor', 'Educational': 'MCA', 'Department': 'Computer', 'DOB': '12-12-1980', 'DOJ': '22-12-2010', 'Address': 'Pulikkal(h)', 'Mobile': '997845985', },
    { 'Name': 'Manu', 'Designation': 'Professor', 'Educational': 'M.Tech', 'Department': 'Chemical Engineering', 'DOB': '10-11-1980', 'DOJ': '23-06-2008', 'Address': 'Thekkel(h)', 'Mobile': '947845985', },
    { 'Name': 'Raju', 'Designation': 'Ass.Professor', 'Educational': 'MCA', 'Department': 'Computer', 'DOB': '12-12-1980', 'DOJ': '22-12-2010', 'Address': 'Pulikkal(h)', 'Mobile': '997845985', },
    { 'Name': 'Manu', 'Designation': 'Professor', 'Educational': 'M.Tech', 'Department': 'Chemical Engineering', 'DOB': '10-11-1980', 'DOJ': '23-06-2008', 'Address': 'Thekkel(h)', 'Mobile': '947845985', },
    { 'Name': 'Raju', 'Designation': 'Ass.Professor', 'Educational': 'MCA', 'Department': 'Computer', 'DOB': '12-12-1980', 'DOJ': '22-12-2010', 'Address': 'Pulikkal(h)', 'Mobile': '997845985', },
    { 'Name': 'Manu', 'Designation': 'Professor', 'Educational': 'M.Tech', 'Department': 'Chemical Engineering', 'DOB': '10-11-1980', 'DOJ': '23-06-2008', 'Address': 'Thekkel(h)', 'Mobile': '947845985', },
    { 'Name': 'Raju', 'Designation': 'Ass.Professor', 'Educational': 'MCA', 'Department': 'Computer', 'DOB': '12-12-1980', 'DOJ': '22-12-2010', 'Address': 'Pulikkal(h)', 'Mobile': '997845985', },
    { 'Name': 'Manu', 'Designation': 'Professor', 'Educational': 'M.Tech', 'Department': 'Chemical Engineering', 'DOB': '10-11-1980', 'DOJ': '23-06-2008', 'Address': 'Thekkel(h)', 'Mobile': '947845985', },
    { 'Name': 'Raju', 'Designation': 'Ass.Professor', 'Educational': 'MCA', 'Department': 'Computer', 'DOB': '12-12-1980', 'DOJ': '22-12-2010', 'Address': 'Pulikkal(h)', 'Mobile': '997845985', },
    { 'Name': 'Manu', 'Designation': 'Professor', 'Educational': 'M.Tech', 'Department': 'Chemical Engineering', 'DOB': '10-11-1980', 'DOJ': '23-06-2008', 'Address': 'Thekkel(h)', 'Mobile': '947845985', },
    { 'Name': 'Raju', 'Designation': 'Ass.Professor', 'Educational': 'MCA', 'Department': 'Computer', 'DOB': '12-12-1980', 'DOJ': '22-12-2010', 'Address': 'Pulikkal(h)', 'Mobile': '997845985', },
    { 'Name': 'Manu', 'Designation': 'Professor', 'Educational': 'M.Tech', 'Department': 'Chemical Engineering', 'DOB': '10-11-1980', 'DOJ': '23-06-2008', 'Address': 'Thekkel(h)', 'Mobile': '947845985', },
    { 'Name': 'Raju', 'Designation': 'Ass.Professor', 'Educational': 'MCA', 'Department': 'Computer', 'DOB': '12-12-1980', 'DOJ': '22-12-2010', 'Address': 'Pulikkal(h)', 'Mobile': '997845985', },
    { 'Name': 'Manu', 'Designation': 'Professor', 'Educational': 'M.Tech', 'Department': 'Chemical Engineering', 'DOB': '10-11-1980', 'DOJ': '23-06-2008', 'Address': 'Thekkel(h)', 'Mobile': '947845985', },
  ]

  ngOnInit(): void {
  }

}
