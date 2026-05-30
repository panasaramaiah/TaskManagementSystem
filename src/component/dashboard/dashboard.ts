import { Component } from '@angular/core';
import { TaskDetails } from '../../Model/TaskDetails';
import { CommonModule } from '@angular/common';
import { DataServices } from '../../data-services';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})

export class Dashboard {
  lstTaskDetails: TaskDetails[] = [];
  constructor(private dataServices: DataServices) {
    this.lstTaskDetails = this.dataServices.getData();
  }
  editTask(id: number) {
    console.log('Editing task:', id);
  }
  addTask(): void {
    debugger;
    console.log('Adding new task');
    var data: TaskDetails = {
      id: this.lstTaskDetails.length + 1,
      title: 'Task ' + (this.lstTaskDetails.length + 1),
      description: 'Description for Task ' + (this.lstTaskDetails.length + 1),
      status: 'Not Started',
      assignedTo: 'Frank Miller',
      dueDate: new Date('2024-07-30')
    };
    this.lstTaskDetails.push(data);
    //alert('New task added successfully!');
  }
}
