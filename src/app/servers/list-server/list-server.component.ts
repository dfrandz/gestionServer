import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable, Subject, catchError, first, map, of, startWith } from 'rxjs';
import { AddServeurComponent } from 'src/app/components/forms/add-serveur/add-serveur.component';
import { DataInfo } from 'src/app/enum/server/data-state.enum';
import { ServerStatus } from 'src/app/enum/server/server-status.enum';
import { Server } from 'src/app/interface/server/server';
import { ServerResponse } from 'src/app/interface/server/server-response';
import { ServerSatate } from 'src/app/interface/server/server-state';
import { NotificationService } from 'src/app/services/auth/notification/notification.service';
import { ServersService } from 'src/app/services/server/servers.service';

@Component({
  selector: 'app-list-server',
  templateUrl: './list-server.component.html',
  styleUrls: ['./list-server.component.css']
})
export class ListServerComponent implements OnInit{

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  // showModal : boolean = false;
  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();

  private noServerFound = new BehaviorSubject<boolean>(false);
  noServerFound$ = this.noServerFound.asObservable();

  private filterSubject = new BehaviorSubject<String>('');
  filterStatus$ = this.filterSubject.asObservable();

  // server
  serverState$ : Observable<ServerSatate<ServerResponse>>;
  readonly DataInfo = DataInfo;
  readonly ServerStatus = ServerStatus;
  private serverSubject = new BehaviorSubject<ServerResponse>(null);


  constructor(private dialogRef: MatDialog, private serverService: ServersService, private notifierService: NotificationService){}

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };
    this.dtTrigger.next
    console.log(this.serverState$);
    this.serverState$ = this.serverService.servers$.pipe(
      map(response =>{
        this.serverSubject.next(response)
        this.notifierService.onSucces('data found');
        return { dataState: DataInfo.LOADED_STATE, serverData: response}
      }),
      startWith({dataState: DataInfo.LOADING_STATE, serverData: null}),
      catchError( (error:string) => { 
        this.notifierService.onError('Erreur de Chargement');
        return of({dataState: DataInfo.ERROR_STATE, error: error})
      })
    )
  }

  deleteServer= (server: Server) =>{
    this.serverState$ = this.serverService.delete$(server.id).pipe(
      map( response =>{
        this.serverSubject.next(
          {...response, data:{servers: this.serverSubject.value.data.servers.filter( s =>s.id !== server.id)}}
        );
        this.notifierService.onSucces('suppression');
        return {dataState: DataInfo.LOADED_STATE, serverData: this.serverSubject.value}
      }),
      startWith({dataState: DataInfo.LOADING_STATE, serverData: this.serverSubject.value}),
      catchError( (error:string) => { 
        this.notifierService.onError('Erreur de suppression');
        return of({dataState: DataInfo.ERROR_STATE, error: error})
      })
    )
  }

  pingServer = () =>{
    console.log('ping')
  }



























  // openModal = ()=>{
  //   console.log('show');
  //   this.showModal = true;
  // }

  // closeModal = ()=>{
  //   console.log("close")
  //   this.showModal= false
  // }

  // handleOnClose = (e:any) =>{
  //   if(e.target.id === 'container'){
  //     console.log(e.target.id)
  //     this.closeModal()
  //   }   
  // }

  openDialog = () =>{
    this.dialogRef.open(AddServeurComponent, {
      data: {
        title:'add server',
      }
    });
  }


}
