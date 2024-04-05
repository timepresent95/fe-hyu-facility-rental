import { columns } from "@/widget/ScheduleTable/model";
import ScheduleTable from "@/widget/ScheduleTable/ui";

async function getReservations() {
  const apiUrl = process.env.API_URL;
  const res = await fetch(apiUrl + "/reservation");
  const reservations = await res.json();
  return reservations;
}

async function SchedulePage() {
  const reservations = await getReservations();
  return (
    <main className="container pt-8">
      <ScheduleTable data={reservations} columns={columns} />
    </main>
  );
}

SchedulePage.displayName = "SchedulePage";

export default SchedulePage;
