import "./App.css";

import { ExclamationCircleIcon } from "@heroicons/react/24/outline";

function App() {
  return (
    <div className="">
      <h1 className="text-black flex flex-row gap-4 items-center">
        <span>Hello world</span>
        <ExclamationCircleIcon className="text-red-600 h-4 w-4" />
      </h1>
    </div>
  );
}

export default App;
