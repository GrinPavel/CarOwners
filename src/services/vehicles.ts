import { VehicleInterface } from '../store/Vehicles/types';
import { http } from './http';
export interface VehicleInfoInterface {
  id?: string;
  brand?: string;
  model?: string;
  year?: string;
  mileage?: string;
  price?: string;
  createdAt?: Date;
}
class VehiclesService {
  static async getAll(): Promise<VehicleInterface[]> {
    return (await http.get('/vehicles')).data;
  }

  static async createVehicle(vehicleInfo: VehicleInterface): Promise<any> {
    return await http.post('/vehicles', vehicleInfo);
  }

  static async updateVehicle(
    vehicleId: string | undefined,
    vehicleInfo: VehicleInterface,
  ): Promise<any> {
    return await http.patch(`/vehicles/${vehicleId}`, vehicleInfo);
  }

  static async deleteVehicle(vehicleId: string | undefined): Promise<any> {
    return await http.delete(`/vehicles/${vehicleId}`);
  }

  static async getAllHistory(): Promise<any> {
    return await http.get('/history');
  }
}

export default VehiclesService;
