import { ColumnDef, type Row } from "@tanstack/react-table";

export interface ReservationTableData {
  id: string;
  eventDate: string;
  applicationDate: Date;
  hostName: string;
  bookings: string;
  phone: string;
  email: string;
  description: string;
}

export const columns: ColumnDef<ReservationTableData>[] = [
  {
    accessorKey: "hostName",
    header: "주최자",
  },
  {
    accessorKey: "bookings",
    header: "예약자 수",
  },
  {
    accessorKey: "eventDate",
    header: "행사일",
  },
];

export interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}
