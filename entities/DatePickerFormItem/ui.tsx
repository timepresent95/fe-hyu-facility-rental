"use client";

import { Calendar } from "#/ui/calendar";
import { FormControl, FormItem, FormLabel, FormMessage } from "#/ui/form";
import { Matcher, SelectSingleEventHandler } from "react-day-picker";
interface Props {
  label?: string;
  selected: Date;
  onSelect: SelectSingleEventHandler;
  disabled?: Matcher | Matcher[];
  className?: string;
}

function DatePickerFormItem({
  label,
  selected,
  onSelect,
  disabled,
  className,
}: Props) {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <Calendar
          className={className}
          mode="single"
          selected={selected}
          onSelect={onSelect}
          disabled={disabled}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}

export default DatePickerFormItem;
