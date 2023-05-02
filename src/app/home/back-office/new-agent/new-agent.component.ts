import { Component } from '@angular/core';

@Component({
  selector: 'app-new-agent',
  templateUrl: './new-agent.component.html',
  styleUrls: ['./new-agent.component.css']
})
export class NewAgentComponent {
  filesNumbers: Array<number>=[1];

  addNewFile(){
    this.filesNumbers.push(1);
  }
}
