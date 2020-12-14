import { environment } from '@src/environments/environment.prod';
import { Component,OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'course-new';
  constructor(private afs:AngularFirestore){}
  OnInit(){
    this.afs.collection('test').snapshotChanges().subscribe(data=>{
      console.log(data);
    })
  }
}
