import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ActuatorService {

    //#region Page Load

    constructor(
        private _httpClient: HttpClient
    ) {

    }

    //#endregion

    //#region Public Functions

    public getSystemHealthInfo(): Observable<any> {
        return this._httpClient.get<any>(`{{baseActuatorUrl}}/health`);
    }

    public getProcessorCount(): Observable<any> {
        return this._httpClient.get<any>(`{{baseActuatorUrl}}/metrics/system.cpu.count`);    
    }

    public getSystemUpTime(): Observable<any> {
        return this._httpClient.get<any>(`{{baseActuatorUrl}}/metrics/process.uptime`);    
    }

    //#endregion

}