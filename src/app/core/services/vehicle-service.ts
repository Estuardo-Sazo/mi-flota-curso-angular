import { inject, Injectable } from '@angular/core';
import { DatabaseService } from './database';
import { liveQuery } from 'dexie';
import { Vehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root',
})
export class VehicleService {
  private db = inject(DatabaseService);

  getAll() {
    return liveQuery(() => this.db.vehicles.toArray());
  }

  getByID(id: number) {
    return this.db.vehicles.get(id);
  }

  add(vehicle: Vehicle) {
    return this.db.vehicles.add(vehicle);
  }

  update(id: number, vehicle: Vehicle) {
    return this.db.vehicles.update(id, vehicle);
  }

  delete(id: number) {
    return this.db.vehicles.delete(id);
  }
}
