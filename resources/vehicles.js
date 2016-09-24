/**
 * Created by Chris.Rieger on 1/30/2016.
 */

class VehicleResource {
    constructor() {
        this.vehicleList = [
            {
                id: 1,
                name: 'Fuel Efficient Vehicle',
                supplies: {
                    crafting: 1
                },
            },
            {
                id: 2,
                name: 'Gas Guzzling SUV',
                supplies: {
                    crafting: 2
                },
            },
            {
                id: 3,
                name: '18-Wheeler',
                supplies: {
                    crafting: 3
                },
            },
        ];
    }

}
;

module.exports = new VehicleResource();