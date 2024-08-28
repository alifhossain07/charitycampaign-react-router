import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1 className="text-3xl font-bold">Oops!</h1>
      <p className="text-3xl font-bold">Sorry, What are you Looking For Isnt Here!</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}