import { IEntity } from "../domain/IEntity";
import { IDatabaseAdapter } from "./IDatabaseAdapter";

export class IRepository<T extends IEntity> {
  private adapter: IDatabaseAdapter<T>;

  constructor(adapter: IDatabaseAdapter<T>) {
    this.adapter = adapter;
  }

  async create(data: T): Promise<T> {
    return this.adapter.create(data);
  }

  async read(id: string): Promise<T | null> {
    return this.adapter.read(id);
  }

  async  readAll(): Promise<T[]> {
    return this.adapter.readAll();
  }

  async update(id: string, data: Partial<T>): Promise<T | null> {
    return this.adapter.update(id, data);
  }

  async delete(id: string): Promise<void> {
    return this.adapter.delete(id);
  }
}
