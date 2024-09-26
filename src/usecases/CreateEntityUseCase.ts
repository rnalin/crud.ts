import { IEntity } from "../domain/IEntity";
import { IRepository } from "../infra";

export class CreateEntityUseCase<T extends IEntity> {
  constructor(private repository: IRepository<T>) {}

  async execute(data: T): Promise<T> {
    return this.repository.create(data);
  }
}