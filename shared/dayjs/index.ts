import dayjs, { type Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

dayjs.extend(isBetween);

export type { Dayjs };
export default dayjs;
