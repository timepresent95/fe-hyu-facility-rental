import { http, HttpResponse } from "msw";
import { ReservationInfo } from "./model";
const reservations: ReservationInfo[] = [
  {
    id: "1212121212",
    eventDate: new Date("2024-05-09"),
    applicationDate: new Date("2024-04-01"),
    hostName: "김면봉",
    capacity: 20,
    phone: "010-1234-5678",
    email: "kcottonbud@gmail.com",
    description: "검정색 면봉을 좋아하는 사람들을 위한 친목 모임",
  },
];

const apiUrl = "http://localhost:3000/api";

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
    }
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
