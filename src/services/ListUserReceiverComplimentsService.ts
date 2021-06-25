import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";

class ListUserReceiverComplimentsService {
  async execute(user_id: string) {
    const complimentRepository = getCustomRepository(ComplimentsRepositories);
    const compliments = await complimentRepository.find({
      where: {
        user_receiver: user_id
      }
    });

    return compliments;
  }
};

export { ListUserReceiverComplimentsService };