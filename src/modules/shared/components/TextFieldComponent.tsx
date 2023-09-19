import { Controller } from "react-hook-form";
import clsx from "clsx";
import { HTMLInputTypeAttribute } from "react";

interface IProps {
  control: any;
  name: string;
  label: string;
  className?: string;
  errors?: any;
  rules?: any;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
}

export default function TextFieldComponent({
  control,
  className,
  label,
  name,
  errors,
  rules,
  placeholder,
  type = "text",
}: IProps) {
  return (
    <Controller
      rules={rules}
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, ref } }) => {
        return (
          <div className={clsx("relative", className)}>
            <div>
              <label
                htmlFor={name}
                className="block mb-2 text-md font-medium text-gray-900 dark:text-white"
              >
                {label}
              </label>
              <input
                onChange={onChange}
                onBlur={onBlur}
                ref={ref}
                type={type}
                id={name}
                placeholder={placeholder}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <p className={"text-red-700 text-sm mt-2"}>
              {errors && errors[name] && errors[name].message}
            </p>
          </div>
        );
      }}
    />
  );
}
