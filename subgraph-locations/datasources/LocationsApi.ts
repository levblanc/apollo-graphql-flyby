import locationsData from './locations_data.json' assert { type: 'json' };

const { locations } = locationsData;

class LocationsAPI {
  getAllLocations() {
    return locations;
  }

  getLocation(id) {
    return locations.find((l) => l.id === id);
  }
}

export default LocationsAPI;
