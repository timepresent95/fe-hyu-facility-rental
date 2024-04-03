"use client";

import { FormControl, FormItem, FormLabel, FormMessage } from "#/ui/form";
import { Textarea, TextareaProps } from "#/ui/textarea";
import { cn } from "#/lib/utils";
import { forwardRef } from "react";

interface Props extends TextareaProps {
  label?: string;
  className?: string;
}

const TextAreaFormItem = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, className, ...props }, ref) => {
    return (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormControl>
          <Textarea
            className={cn("resize-none", className)}
            ref={ref}
            {...props}
          />
        </FormControl>
        <FormMessage />
      </FormItem>
    );
  }
);

TextAreaFormItem.displayName = "TextAreaFormItem";
export default TextAreaFormItem;
