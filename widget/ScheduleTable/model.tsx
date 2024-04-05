import { ReservationInfo } from "@/entities/ReservationInfo/model";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<ReservationInfo>[] = [
  {
    accessorKey: "hostName",
    header: "주최자",
  },
  {
    accessorKey: "capacity",
    header: "참석 가능 인원",
  },
  {
    accessorKey: "applicationDate",
    header: "신청일",
  },
];

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
