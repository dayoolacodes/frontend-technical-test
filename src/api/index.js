// eslint-disable-next-line no-unused-vars
import { request } from './helpers';

/**
 * Pull vehicles information
 *
 * @return {Promise<Array.<vehicleSummaryPayload>>}
 */
// TODO: All API related logic should be made inside this function.
export default async function getData() {
  try {
    // Fetch all vehicle data from the API
    const allVehicleData = await request('/api/vehicles.json');

    // Create an array of API calls to fetch vehicle details
    const vehicleDetailApiCalls = allVehicleData.map((vehicle) => request(vehicle.apiUrl));

    // Fetch details for all vehicles concurrently
    const vehicleDetailResults = await Promise.allSettled(vehicleDetailApiCalls);

    // Filter and map valid vehicle details
    const validVehicleDetails = vehicleDetailResults
      .filter((result) => result.status === 'fulfilled' && result.value.price)
      .map((result) => result.value);

    // Combine valid vehicle details with their corresponding data
    const validVehiclesWithDetails = validVehicleDetails.map((validVehicle) => ({
      ...validVehicle,
      ...allVehicleData.find((vehicle) => vehicle.id === validVehicle.id),
    }));

    return validVehiclesWithDetails;
  } catch (error) {
    throw new Error(error.message);
  }
}
