// src/controllers/EntityController.ts
import { CreateEntityUseCase } from '../usecases/CreateEntityUseCase';
import { ReadEntityUseCase } from '../usecases/ReadEntityUseCase';
import { UpdateEntityUseCase } from '../usecases/UpdateEntityUseCase';
import { DeleteEntityUseCase } from '../usecases/DeleteEntityUseCase';
import { IEntity } from '../domain/IEntity';
import { ReadAllEntityUseCase } from '../usecases/ReadAllEntityUseCase';

export class EntityController<T extends IEntity> {
  private createEntityUseCase: CreateEntityUseCase<T>;
  private readEntityUseCase: ReadEntityUseCase<T>;
  private readAllEntityUseCase: ReadAllEntityUseCase<T>;
  private updateEntityUseCase: UpdateEntityUseCase<T>;
  private deleteEntityUseCase: DeleteEntityUseCase<T>;

  constructor(
    createEntityUseCase: CreateEntityUseCase<T>,
    readEntityUseCase: ReadEntityUseCase<T>,
    readAllEntityUseCase: ReadAllEntityUseCase<T>,
    updateEntityUseCase: UpdateEntityUseCase<T>,
    deleteEntityUseCase: DeleteEntityUseCase<T>
  ) {
    this.createEntityUseCase = createEntityUseCase;
    this.readEntityUseCase = readEntityUseCase;
    this.readAllEntityUseCase = readAllEntityUseCase;
    this.updateEntityUseCase = updateEntityUseCase;
    this.deleteEntityUseCase = deleteEntityUseCase;
  }

  async create(data: T): Promise<T> {
    return this.createEntityUseCase.execute(data);
  }

  async read(id: string): Promise<T | null> {
    return this.readEntityUseCase.execute(id);
  }

  async readAll(): Promise<T[] | null> {
    return this.readAllEntityUseCase.execute();
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    return this.updateEntityUseCase.execute(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.deleteEntityUseCase.execute(id);
  }
}