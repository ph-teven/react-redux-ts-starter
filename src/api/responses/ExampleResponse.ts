import {Expose} from "class-transformer";

export class ExampleResponse {
    @Expose({name: "foo"})
    public readonly foo: string;

    constructor(foo: string) {
        this.foo = foo;
    }
}
