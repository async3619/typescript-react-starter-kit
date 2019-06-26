import { Field, InputType } from "type-graphql";

@InputType()
export default class WriteGuestBookInput {
    @Field()
    public name: string;

    @Field()
    public password: string;

    @Field()
    public content: string;
}
