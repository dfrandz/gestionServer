import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css']
})
export class AddServerComponent implements OnInit{

  name;
  constructor( @Inject(MAT_DIALOG_DATA) public data) {
    this.name = data.title
  }


  ngOnInit(): void {
    
  }

  show = () =>{
    console.log('ajout')
  }
}
