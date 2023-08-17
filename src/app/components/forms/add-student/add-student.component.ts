import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  url = null;





  onselectFile(event : any){
    if(event.target.files[0]){
      const file = event.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event:any) =>{
        this.url = event.target.result;
      }
    }

  }
}
