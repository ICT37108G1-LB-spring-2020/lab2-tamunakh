import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  infoTitles: string[];
  students: string[][];

  constructor() {
    this.infoTitles = ['Name', 'Surname', 'ID'];
    this.students = [
      ['John', 'Doe', '01234567890'],
      ['Jane', 'Smith', '98765432100'],
      ['Ann', 'Miller', '23567985123'],
      ['Dave', 'Davis', '56319758431']
    ];
  }

  ngOnInit(): void {
  }
}
