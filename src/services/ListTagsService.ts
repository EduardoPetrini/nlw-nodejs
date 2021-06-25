import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";

class ListTagsService {
  async execute() {
    const tagRepository = getCustomRepository(TagsRepositories);

    const tags = tagRepository.find();

    return tags;
  }
}

export { ListTagsService as ListTagService };