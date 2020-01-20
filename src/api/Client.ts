import {plainToClass} from "class-transformer";
import {Observable, of} from "rxjs";
import {ajax} from "rxjs/ajax";
import {mergeMap} from "rxjs/operators";
import {ExampleResponse} from "./responses/ExampleResponse";

export interface ApiClientInterface {
    ping(): Observable<ExampleResponse>;
}

export class Client implements ApiClientInterface {

    constructor(
        private readonly host: string
    ) {
    }

    public ping(): Observable<ExampleResponse> {
        return ajax.get(this.host, this.getHeaders()).pipe(
            mergeMap((response) => {
                return of(plainToClass(ExampleResponse, response.response as object));
            }),
        );
    }

    private getHeaders() {
        return {
            "Accept": "application/json",
            "Content-Type": "application/json",
        };
    }
}
