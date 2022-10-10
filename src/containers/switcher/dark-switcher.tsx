import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { DarkIcon, SunIcon } from "../../components/icon";

const DarkSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => setLoaded(true), []);
  return (
    <button
      className="flex items-center px-3 py-2"
      id="theme-toggle"
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {loaded && theme === "dark" ? <DarkIcon /> : <SunIcon />}
    </button>
  );
};

export default DarkSwitcher;
