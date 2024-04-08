export interface ReservationInfo {
  id: string;
  eventDate: Date;
  applicationDate: Date;
  hostName: string;
  attendees: number;
  capacity: number;
  phone: string;
  email: string;
  description: string;
}
