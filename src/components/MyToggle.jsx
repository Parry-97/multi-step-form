// import { useState } from "react";
import { Switch } from "@headlessui/react";

export default function MyToggle({ enabled, setEnabled }) {
  // const [enabled, setEnabled] = useState(false);

  return (
    <Switch.Group>
      <div className="flex font-bold justify-center  mt-5 text-gray-400 items-center">
        <Switch.Label
          passive="true"
          onClick={() => setEnabled(false)}
          className={!enabled ? "mr-5 text-blue-900" : "mr-5"}
        >
          Monthly
        </Switch.Label>
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${
            enabled ? "bg-blue-900" : "bg-blue-900"
          } relative inline-flex h-6 w-2/3 max-w-[48px] sm:w-12 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
        >
          <span
            className={`${
              enabled ? "translate-x-7" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
          />
        </Switch>
        <Switch.Label
          passive="true"
          onClick={() => setEnabled(true)}
          className={enabled ? "ml-5 text-blue-900" : "ml-5"}
        >
          Yearly
        </Switch.Label>
      </div>
    </Switch.Group>
  );
}
