import { Injectable } from '@angular/core';
import { TaskDetails } from './Model/TaskDetails';
@Injectable({
  providedIn: 'root',
})
export class DataServices {
  lstTaskDetails: TaskDetails[] = [];
  getData(): TaskDetails[] {
    var taskDetails: TaskDetails[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description for Task 1',
      status: 'In Progress',
      assignedTo: 'John Doe',
      dueDate: new Date('2024-07-01')
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description for Task 2',
      status: 'Completed',
      assignedTo: 'Jane Smith',
      dueDate: new Date('2024-06-30') 
    },
    {
      id: 3,
      title: 'Task 3',
      description: 'Description for Task 3',
      status: 'Not Started',
      assignedTo: 'Alice Johnson',
      dueDate: new Date('2024-07-15') 
    },
    { 
      id: 4,    
      title: 'Task 4',
      description: 'Description for Task 4',
      status: 'In Progress',
      assignedTo: 'Bob Brown',
      dueDate: new Date('2024-07-10')
    },
    { 
      id: 5,    
      title: 'Task 5',
      description: 'Description for Task 5',
      status: 'Not Started',
      assignedTo: 'Charlie Davis',
      dueDate: new Date('2024-07-20')
    },
    {
      id: 6,  
      title: 'Task 6',
      description: 'Description for Task 6',
      status: 'Completed',
      assignedTo: 'Eve Wilson',
      dueDate: new Date('2024-06-25')
    }
   ]; 
    this.lstTaskDetails = taskDetails;
    return this.lstTaskDetails;
  }
}
