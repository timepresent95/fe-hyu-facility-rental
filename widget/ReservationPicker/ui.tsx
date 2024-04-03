"use client";

import { Form, FormField } from "#/ui/form";
import { Button, ButtonProps } from "#/ui/button";
import DatePickerFormItem from "@/entities/DatePickerFormItem/ui";
import TextAreaFormItem from "@/entities/TextAreaFormItem/ui";
import InputFormItem from "@/entities/InputFormItem/ui";
import StepperInputFormItem from "@/entities/StepperInputFormItem/ui";
import PhoneFormItem from "@/entities/PhoneFormItem/ui";
import EmailFormItem from "@/entities/EmailFormItem/ui";
import { useFormSubmit, useFormValuesContext } from "./context";

function ReservationPicker() {
  const { form } = useFormValuesContext();
  return (
    <Form {...form}>
      <form>
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <DatePickerFormItem
              className="w-full"
              selected={field.value}
              onSelect={field.onChange}
            />
          )}
        />
        <div className="w-full space-y-2 px-3">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <InputFormItem
                label="신청자명"
                className="h-8"
                placeholder="대표 신청자 한 명만 작성해주세요."
                value={field.value}
                onChange={field.onChange}
              />
            )}
          />
          <FormField
            control={form.control}
            name="participants"
            render={({ field }) => (
              <StepperInputFormItem
                label="참가 인원"
                className="h-8"
                value={field.value}
                name={field.name}
              />
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <PhoneFormItem
                label="전화 번호"
                value={field.value}
                name={field.name}
              />
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <EmailFormItem
                className="h-8"
                label="이메일"
                value={field.value}
                name={field.name}
              />
            )}
          />
          <FormField
            control={form.control}
            name="purpose"
            render={({ field }) => (
              <TextAreaFormItem
                label="사용 목적"
                className="h-full"
                placeholder="모임의 취지 및 장소 이용 목적을 작성해주세요."
                {...field}
              />
            )}
          />
        </div>
      </form>
    </Form>
  );
}

function ReservationSubmitButton({
  label,
  onClick,
  ...props
}: Omit<ButtonProps, "type"> & { label: string }) {
  const { handleSubmit } = useFormSubmit();
  return (
    <Button
      type="button"
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
        handleSubmit(() => {});
      }}
      {...props}>
      {label}
    </Button>
  );
}

export { ReservationPicker, ReservationSubmitButton };
