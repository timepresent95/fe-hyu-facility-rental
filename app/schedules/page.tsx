import { columns } from "@/widget/ScheduleTable/model";
import ScheduleTable from "@/widget/ScheduleTable/ui";

function SchedulePage() {
  return (
    <main className="container pt-8">
      <ScheduleTable data={[]} columns={columns} />
    </main>
  );
}

SchedulePage.displayName = "SchedulePage";

export default SchedulePage;
