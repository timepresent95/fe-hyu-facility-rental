import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "#/ui/form";
import { Input, InputProps } from "#/ui/input";
import { forwardRef } from "react";

interface Props extends InputProps {
  label?: string;
}

const InputFormItem = forwardRef<HTMLInputElement, Props>(
  ({ label, value, onChange, ...props }, ref) => {
    return (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Input ref={ref} value={value} onChange={onChange} {...props} />
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  }
);

InputFormItem.displayName = "InputFormItem";
export default InputFormItem;
