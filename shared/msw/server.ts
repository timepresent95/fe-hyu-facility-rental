import { setupServer } from "msw/node";
import { handlers } from "@/entities/ReservationInfo/msw";

export const server = setupServer(...handlers);
