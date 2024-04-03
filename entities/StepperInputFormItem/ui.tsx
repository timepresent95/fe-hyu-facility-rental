import { Plus, Minus } from "lucide-react";
import { FormControl, FormItem, FormLabel, FormMessage } from "#/ui/form";
import { Input, InputProps } from "#/ui/input";
import { Button } from "#/ui/button";
import { cn } from "#/lib/utils";
import { forwardRef } from "react";
import { useFormContext } from "react-hook-form";

interface Props extends Omit<InputProps, "type"> {
  name: string;
  value: number;
  label?: string;
  className?: string;
}

const StepperInputFormItem = forwardRef<HTMLInputElement, Props>(
  ({ name, value, label, className, onInput, ...props }, ref) => {
    const { setValue } = useFormContext();
    return (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <div className={cn(className, "flex space-x-2")}>
            <Button
              size="icon"
              className="h-full"
              type="button"
              onClick={() => setValue(name, value - 1 < 0 ? 0 : value - 1)}>
              <Minus size="16" />
            </Button>
            <Input
              {...props}
              className="h-full text-center"
              ref={ref}
              value={value}
              onInput={(e) => {
                if (onInput) {
                  onInput(e);
                }
                const target = e.target as HTMLInputElement;
                if (/^[0-9]+$/.test(target.value)) {
                  setValue(name, parseInt(target.value));
                }
              }}
            />
            <Button
              size="icon"
              className="h-full"
              type="button"
              onClick={() => setValue(name, value + 1)}>
              <Plus size="16" />
            </Button>
          </div>
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  }
);

StepperInputFormItem.displayName = "StepperInputFormItem";
export default StepperInputFormItem;
