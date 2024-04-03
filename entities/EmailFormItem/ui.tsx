import { useEffect, useState } from "react";
import { AtSign } from "lucide-react";
import { useFormContext } from "react-hook-form";
import { cn } from "#/lib/utils";
import { FormControl, FormItem, FormLabel, FormMessage } from "#/ui/form";
import { Input } from "#/ui/input";

interface Props {
  label?: string;
  value: string;
  name: string;
  className: string;
}

function EmailFormItem({ label, value, name, className }: Props) {
  const { setValue } = useFormContext();
  const [userName, setUserName] = useState("");
  const [domain, setDomain] = useState("");

  useEffect(() => {
    const [userNamePart, domainPart] = value.split("@");
    if (userNamePart && domainPart) {
      setUserName(userNamePart);
      setDomain(domainPart);
    }
  }, [value]);

  useEffect(() => {
    setValue(name, userName + "@" + domain);
  }, [setValue, name, userName, domain]);

  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>
        <div className={cn("flex space-x-2 items-center", className)}>
          <Input
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <AtSign className="w-8" />
          <Input
            value={domain}
            onChange={(e) => {
              setDomain(e.target.value);
            }}
          />
        </div>
      </FormControl>
      <FormMessage />
    </FormItem>
  );
}

EmailFormItem.displayName = "EmailFormItem";

export default EmailFormItem;
