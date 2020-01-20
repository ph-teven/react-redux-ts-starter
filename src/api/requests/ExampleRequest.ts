import {Expose} from "class-transformer";

export class ExampleRequest {

    @Expose({name: "foo"})
    public readonly foo: string;

    constructor(foo: string) {
        this.foo = foo;
    }
}
