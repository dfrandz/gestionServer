import { Component , Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-server',
  templateUrl: './update-server.component.html',
  styleUrls: ['./update-server.component.css']
})
export class UpdateServerComponent implements OnInit {


  title;
  constructor( @Inject(MAT_DIALOG_DATA) public data) {
    this.title = data.title
  }


  ngOnInit(): void {
    
  }

  show = () =>{
    console.log('ajout')
  }
}
