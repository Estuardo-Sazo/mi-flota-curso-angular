import { Injectable } from '@angular/core';
import Dexie, { Table } from 'dexie';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService extends Dexie {
  vehicles!: Table<Vehicle, number>;

  constructor() {
    super('miFlotaDB');
    this.version(1).stores({
      vehicles: '++id, name, description, createdAt',
    });
  }
}
