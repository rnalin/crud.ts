// src/usecases/ReadEntityUseCase.ts
import { IEntity } from '../domain/IEntity';
import { IRepository } from '../infra';

export class ReadAllEntityUseCase<T extends IEntity> {
  private repository: IRepository<T>;

  constructor(repository: IRepository<T>) {
    this.repository = repository;
  }

  async execute(): Promise<T[] | null> {
    const entities = await this.repository.readAll();
    
    if (!entities) {
      throw new Error(`No entities found`);
    }
    
    return entities;
  }
}