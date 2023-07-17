import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import ToggleComponent from "@/shared/components/ToggleComponent";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <ToggleComponent
      value={theme === "dark"}
      onChange={(isChecked) => {
        setTheme(isChecked ? "dark" : "light");
      }}
    />
  );
}
