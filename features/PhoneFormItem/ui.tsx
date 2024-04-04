import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "#/ui/input-otp";
import { Minus } from "lucide-react";
import { FormControl, FormItem, FormLabel, FormMessage } from "#/ui/form";
import { useFormContext } from "react-hook-form";

interface Props {
  label?: string;
  value: string;
  name: string;
}

function PhoneFormItem({ label, value, name }: Props) {
  const { setValue } = useFormContext();
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <InputOTP
          value={value}
          maxLength={11}
          onChange={(e) => {
            setValue(name, e);
          }}
          containerClassName="grid gap-2 grid-cols-[3fr_12px_4fr_12px_4fr]">
          <InputOTPGroup className="grid grid-cols-3">
            <InputOTPSlot className="w-full h-8" index={0} />
            <InputOTPSlot className="w-full h-8" index={1} />
            <InputOTPSlot className="w-full h-8" index={2} />
          </InputOTPGroup>
          <Minus className="w-3" />
          <InputOTPGroup className="grid grid-cols-4">
            <InputOTPSlot className="w-full h-8" index={3} />
            <InputOTPSlot className="w-full h-8" index={4} />
            <InputOTPSlot className="w-full h-8" index={5} />
            <InputOTPSlot className="w-full h-8" index={6} />
          </InputOTPGroup>
          <Minus className="w-3" />
          <InputOTPGroup className="grid grid-cols-4">
            <InputOTPSlot className="w-full h-8" index={7} />
            <InputOTPSlot className="w-full h-8" index={8} />
            <InputOTPSlot className="w-full h-8" index={9} />
            <InputOTPSlot className="w-full h-8" index={10} />
          </InputOTPGroup>
        </InputOTP>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}

PhoneFormItem.displayName = "PhoneFormItem";

export default PhoneFormItem;
