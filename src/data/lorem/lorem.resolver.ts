import { Arg, Int, Query, Resolver } from "type-graphql";
import faker from "faker";

@Resolver()
export default class LoremResolver {
    @Query(returns => String)
    async sentence(@Arg("wordCount", returns => Int) wordCount: number) {
        return faker.lorem.sentence(wordCount);
    }

    @Query(returns => String)
    async paragraph(@Arg("sentenceCount", returns => Int) sentenceCount: number) {
        return faker.lorem.paragraph(sentenceCount);
    }
}
