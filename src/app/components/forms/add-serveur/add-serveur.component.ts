import { Component, OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';
import { BehaviorSubject, Observable, catchError, map, of, startWith } from 'rxjs';
import { DataInfo } from 'src/app/enum/server/data-state.enum';
import { ServerStatus } from 'src/app/enum/server/server-status.enum';
import { Server } from 'src/app/interface/server/server';
import { ServerResponse } from 'src/app/interface/server/server-response';
import { ServerSatate } from 'src/app/interface/server/server-state';
import { NotificationService } from 'src/app/services/auth/notification/notification.service';
import { ServersService } from 'src/app/services/server/servers.service';

@Component({
  selector: 'app-add-serveur',
  templateUrl: './add-serveur.component.html',
  styleUrls: ['./add-serveur.component.css']
})
export class AddServeurComponent implements OnInit {

  private isLoading = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoading.asObservable();

  serverState$ : Observable<ServerSatate<ServerResponse>>;
  readonly DataInfo = DataInfo;
  readonly ServerStatus = ServerStatus;
  private serverSubject = new BehaviorSubject<ServerResponse>(null);


  constructor(private serverService: ServersService, private notifierService: NotificationService){}

  ngOnInit(): void {
    this.serverState$
  }

  saveServer = (serverForm: NgForm): void =>{
    console.log('adding')
    this.serverState$ = this.serverService.save$(serverForm.value as Server).pipe(
      map( response =>{
        console.log(response);
        this.serverSubject.next(
          {...response, data: {servers: [response.data.server]} }
        );
        serverForm.resetForm({status: this.ServerStatus.SERVER_DOWN});
        this.notifierService.onSucces('server adding successul')
        return {dataState: DataInfo.LOADED_STATE, serverData: this.serverSubject.value}
      }),
      startWith({dataState: DataInfo.LOADING_STATE, serverData: this.serverSubject.value}),
      catchError( (error:string) => {
        console.log(error)
        this.notifierService.onError(`add error: ${error}`)
        return of({dataState: DataInfo.ERROR_STATE, error: error})
      })
    )
  }


}
