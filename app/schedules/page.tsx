import { columns } from "@/widget/ScheduleTable/model";
import ScheduleTable from "@/widget/ScheduleTable/ui";
import { ReservationInfo } from "@/entities/ReservationInfo/model";
import dayjs from "@/shared/dayjs";

async function getReservations() {
  const apiUrl = process.env.API_URL;
  const res = await fetch(apiUrl + "/reservation");
  const reservations: ReservationInfo[] = await res.json();
  return reservations;
}

async function SchedulePage() {
  const reservations = await getReservations();
  const reservationDatas = reservations
    .map((v) => {
      const ret = {
        ...v,
        bookings: v.attendees + "/" + v.capacity,
        eventDate: dayjs(v.eventDate).format("YY-MM-DD"),
      };
      return ret;
    })
    .sort((dataA, dataB) => {
      return dayjs(dataA.eventDate, "YY-MM-DD").isBefore(
        dayjs(dataB.eventDate, "YY-MM-DD")
      )
        ? -1
        : 1;
    });
  return (
    <main className="container pt-8">
      <ScheduleTable data={reservationDatas} columns={columns} />
    </main>
  );
}

SchedulePage.displayName = "SchedulePage";

export default SchedulePage;
