import ToogleButton from "./ToogleButton";

export default function ToogleInput(props) {
  return (
    <div className="flex-1 sm:flex sm: flex-wrap mb-2 mt-1 p-2">
      <div className="w-full">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-state"
        >
          {props.label}
        </label>
        <div className="relative">
          <select
            name={props.name}
            onChange={props.onChange}
            value={props.value}
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            {props.list &&
              props.list.map((item) => (
                <option value={item.key} key={item.key}>
                  {item.title}
                </option>
              ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ToogleButton />
          </div>
        </div>
      </div>
    </div>
  );
}

/*

            */
