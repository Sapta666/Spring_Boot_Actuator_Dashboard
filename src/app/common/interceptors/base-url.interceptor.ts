import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "../environment/environment";


export const BaseUrlInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>>  => {
        let newUrl: string = req.url;

        if(newUrl.indexOf("{{baseActuatorUrl}}") > -1)
            newUrl = newUrl.replace("{{baseActuatorUrl}}",environment.baseActuatorUrl);
        
        const newReq: HttpRequest<any> = req.clone({
                url: newUrl
            }
        );

        return next(newReq);
}