import { IBusDbModel } from "./db/bus-db.model";

export class Bus {
    public id: string;
    public name: string;
    public number: string;
    public arrivalTime: string;
    public departureTime: string;
    public sourceStation: string;
    public destinationStation: string;
    public fare: Number;
    public totalSeats: Number;
    public availabilityCalendar: Array<AvailabilityCalendar>;
    public details?: string;
    public additionalInfo?: any;

    public static translate(model: IBusDbModel): Bus {
        return {
            id: model.id,
            name: model.name,
            number: model.number,
            arrivalTime: model.arrivalTime,
            departureTime: model.departureTime,
            sourceStation: model.sourceStation,
            destinationStation: model.destinationStation,
            fare: model.fare,
            totalSeats: model.totalSeats,
            availabilityCalendar: model.availabilityCalendar,
            details: model.details,
            additionalInfo: model.additionalInfo,

        };
    }
}

export class AvailabilityCalendar {
    public date: Date;
    public availableSeats: Number;
}