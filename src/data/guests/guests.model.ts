import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
export default class GuestBookItem {
    @Field(type => Int)
    public id: number;

    @Field()
    public name: string;

    @Field()
    public content: string;

    @Field()
    public createdAt: Date;

    @Field()
    public updatedAt: Date;
}
