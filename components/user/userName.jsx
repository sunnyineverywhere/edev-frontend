import "@/app/globals.css";

export default function UserName(props) {
  return (
    <div className="flex flex-wrap -mx-3 mb-2 p-2">
      <div className="w-full px-3">
        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
          name
        </label>
        <input
          name={props.name}
          onChange={props.onChange}
          placeholder={props.name}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        />
      </div>
    </div>
  );
}
