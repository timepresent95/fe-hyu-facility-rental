import { ReservationInfo } from "@/entities/ReservationInfo/model";
import { z } from "zod";

export const FormSchema = z.object({
  eventDate: z.date({
    required_error: "예약일을 선택해주세요",
  }),
  hostName: z.string().trim().min(1, "신청자명을 입력해주세요"),
  capacity: z
    .number({
      invalid_type_error: "숫자만 입력해주세요",
    })
    .gte(1, "참가 인원은 최소 1명 이상이어야합니다"),
  phone: z.string().length(11, "올바른 형식의 전화번호를 입력해주세요"),
  email: z.string().email("올바른 형식의 이메일을 입력해주세요"),
  description: z
    .string({
      required_error: "사용 목적을 입력해주세요",
    })
    .min(30, "최소 30자 이상으로 작성해주세요."),
});

export type FormSchemaValues = Omit<ReservationInfo, "id">;
