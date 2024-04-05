import { setupWorker } from "msw/browser";
import { handlers } from "@/entities/ReservationInfo/msw";

export const worker = setupWorker(...handlers);
