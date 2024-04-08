import { http, HttpResponse } from "msw";
import { ReservationInfo } from "./model";
const reservations: ReservationInfo[] = [
  {
    id: "0",
    eventDate: new Date("2024-03-09"),
    applicationDate: new Date("2024-02-01"),
    hostName: "마우스",
    attendees: 0,
    capacity: 2,
    phone: "010-1234-5678",
    email: "kcottonbud@gmail.com",
    description: "마우스를 좋아하는 사람들을 위한 친목 모임",
  },
  {
    id: "1",
    eventDate: new Date("2024-05-09"),
    applicationDate: new Date("2024-04-01"),
    hostName: "김면봉",
    attendees: 0,
    capacity: 2,
    phone: "010-1234-5678",
    email: "kcottonbud@gmail.com",
    description: "검정색 면봉을 좋아하는 사람들을 위한 친목 모임",
  },
  {
    id: "2",
    eventDate: new Date("2024-04-19"),
    applicationDate: new Date("2024-03-03"),
    hostName: "자이리톨",
    attendees: 3,
    capacity: 10,
    phone: "010-1234-5678",
    email: "xylito@gmail.com",
    description: "자이리톨을 좋아하는 사람들을 위한 친목 모임",
  },
  {
    id: "3",
    eventDate: new Date("2024-06-13"),
    applicationDate: new Date("2024-04-03"),
    hostName: "타이머",
    attendees: 12,
    capacity: 12,
    phone: "010-1234-5678",
    email: "timer@gmail.com",
    description: "타이머를 좋아하는 사람들을 위한 친목 모임",
  },
  {
    id: "5",
    eventDate: new Date("2024-06-11"),
    applicationDate: new Date("2024-03-21"),
    hostName: "타이머",
    attendees: 0,
    capacity: 12,
    phone: "010-1234-5678",
    email: "timer@gmail.com",
    description: "타이머를 좋아하는 사람들을 위한 친목 모임",
  },
];

const apiUrl = process.env.NEXT_PUBLIC_API;

export const handlers = [
  http.get(apiUrl + "/reservation", () => {
    return HttpResponse.json(reservations);
  }),
  http.post<{}, ReservationInfo>(
    apiUrl + "/reservation",
    async ({ request }) => {
      const newReservation = await request.json();
      reservations.push(newReservation);
      return HttpResponse.json(newReservation, { status: 201 });
    },
  ),

  http.delete(apiUrl + "/reservation/:id", ({ params }) => {
    const { id } = params;

    const targetIndex = reservations.findIndex((v) => v.id === id);

    if (!targetIndex) {
      return new HttpResponse(null, { status: 404 });
    }
    const target = reservations[targetIndex];
    reservations.splice(targetIndex, 1);

    return HttpResponse.json(target);
  }),
];
