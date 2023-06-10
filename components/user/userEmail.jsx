import "@/app/globals.css";

export default function UserEmail(props) {
  return (
    <div className="flex flex-wrap -mx-3 mb-2 p-2">
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-password"
        >
          email
        </label>
        <input
          name={props.email}
          placeholder={props.email}
          className="appearance-none block w-full bg-gray-200 placeholder-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
          readOnly
        />
      </div>
    </div>
  );
}
