"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { PropsWithChildren, createContext, useContext } from "react";
import { UseFormHandleSubmit, UseFormReturn, useForm } from "react-hook-form";
import { FormSchema, type FormSchemaValues } from "./formSchema";

const FormSubmitContext = createContext<{
  handleSubmit?: UseFormHandleSubmit<FormSchemaValues>;
}>({});
const FormValuesContext = createContext<{
  form?: UseFormReturn<FormSchemaValues>;
}>({});

function useFormSubmit() {
  const { handleSubmit } = useContext(FormSubmitContext);
  if (handleSubmit === undefined) {
    throw new Error("useFormSubmit는 FormProvider 안에서 사용되어야 합니다.");
  }
  return { handleSubmit };
}

function useFormValuesContext() {
  const { form } = useContext(FormValuesContext);
  if (form === undefined) {
    throw new Error(
      "useFormValuesContext는 FormProvider 안에서 사용되어야 합니다."
    );
  }
  return { form };
}

function FormProvider({ children }: PropsWithChildren) {
  const form = useForm<FormSchemaValues>({
    defaultValues: { name: "", participants: 0, email: "" },
    resolver: zodResolver(FormSchema),
  });
  return (
    <FormSubmitContext.Provider value={{ handleSubmit: form.handleSubmit }}>
      <FormValuesContext.Provider value={{ form }}>
        {children}
      </FormValuesContext.Provider>
    </FormSubmitContext.Provider>
  );
}
export { FormProvider, useFormSubmit, useFormValuesContext };
