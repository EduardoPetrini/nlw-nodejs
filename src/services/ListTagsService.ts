import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";
import { classToPlain } from "class-transformer";

class ListTagsService {
  async execute() {
    const tagRepository = getCustomRepository(TagsRepositories);

    const tags = tagRepository.find();

    return classToPlain(tags);
  }
}

export { ListTagsService as ListTagService };