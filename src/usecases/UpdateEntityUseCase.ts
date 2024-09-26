// src/usecases/UpdateEntityUseCase.ts
import { IEntity } from '../domain/IEntity';
import { IRepository } from '../infra';

export class UpdateEntityUseCase<T extends IEntity> {
  private repository: IRepository<T>;

  constructor(repository: IRepository<T>) {
    this.repository = repository;
  }

  async execute(id: string, data: Partial<T>): Promise<T | null> {
    if (!id) throw new Error('ID must be provided to update an entity');
    
    if (Object.keys(data).length === 0) {
      throw new Error('No data provided for update');
    }

    const updatedEntity = await this.repository.update(id, data);

    if (!updatedEntity) {
      throw new Error(`Entity with ID ${id} not found or update failed`);
    }

    return updatedEntity;
  }
}