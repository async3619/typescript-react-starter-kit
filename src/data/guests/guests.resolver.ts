import { Arg, Args, Mutation, Query, Resolver } from "type-graphql";
import bcrypt from "bcrypt";

import Guest from "./guest.entity";

import GuestBookItem from "./guests.model";
import WriteGuestBookInput from "./guests.input";

import IndexableArgs from "../common/indexable.args";

@Resolver(of => GuestBookItem)
export default class GuestsResolver {
    @Query(returns => [GuestBookItem])
    async guestBooks(@Args() { index, count }: IndexableArgs): Promise<GuestBookItem[]> {
        return Guest.find({
            skip: index * count,
            take: count,
            order: {
                id: "DESC",
            },
        });
    }

    @Mutation(returns => GuestBookItem)
    async writeGuestBook(@Arg("data") newGuestBookData: WriteGuestBookInput) {
        const guest = new Guest();
        guest.name = newGuestBookData.name;
        guest.password = await bcrypt.hash(newGuestBookData.password, 13);
        guest.content = newGuestBookData.content;

        return guest.save();
    }
}
