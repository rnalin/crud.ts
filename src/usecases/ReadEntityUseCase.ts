// src/usecases/ReadEntityUseCase.ts
import { IEntity } from '../domain/IEntity';
import { IRepository } from '../infra';

export class ReadEntityUseCase<T extends IEntity> {
  private repository: IRepository<T>;

  constructor(repository: IRepository<T>) {
    this.repository = repository;
  }

  async execute(id: string): Promise<T | null> {
    if (!id) throw new Error('ID must be provided to read an entity');
    
    const entity = await this.repository.read(id);
    
    if (!entity) {
      throw new Error(`Entity with ID ${id} not found`);
    }
    
    return entity;
  }
}