import { Component } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {
tasks:{title:string;completed:boolean;}[]-
[
(tittle:"Tender la cama.")

]
  newTask = '';
}


  addTask(){
    if(this.newTask.trim().lenght == 0)(
      return;
    )
    this.tasks.push((title:this.newTask, completed:false));
    this.newTask='';

  }
}
