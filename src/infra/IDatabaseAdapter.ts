export interface IDatabaseAdapter<T> {
    create(data: T): Promise<T>;
    read(id: string): Promise<T | null>;
    readAll(): Promise<T[]>;
    update(id: string, data: Partial<T>): Promise<T | null>;
    delete(id: string): Promise<void>;
  }