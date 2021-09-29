import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal';


@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {
  goals: Goal[] = [

    new Goal(1, 'learn angular', 'developing apps with angular and consuming api'),
    new Goal(2, 'explore odoo software', 'learning odoo erp software in detail'),
    new Goal(3, 'update documents', 'updating resume and cv and cover letter'),
    new Goal(4, 'learn js deep', 'learning javascript in details and how to consume apis using it'),
    new Goal(5, 'solve js codewars', 'practicing to solve a code challenge averyday with codewars and hackeranks'),
    new Goal(6, 'check meetups calendar', 'looking for meetups, updating the calender and updating'),
  ]
   toggleDetails(index:number){
     this.goals[index].showdescription= !this.goals[index].showdescription;
    //  button.style.display="none";  
   }
   completegoal(iscomplete:boolean,index:number){
     if(iscomplete){
       this.goals.splice(index,1);
     }

   }

  constructor() { }

  //this is a lifecircle hook  it is called each time the component is created
  // we use to put complex logic that we want for our component
  ngOnInit(): void {
  }

}
