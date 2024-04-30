// import { useRouteError } from "react-router-dom";

export default function NotFoundPage() {
  // const error = useRouteError() as Error;
  // console.error(error);

  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>404 not found</p>
      <p>{/* <i>{ error?.message || error.name ||"Error"}</i> */}</p>
    </div>
  );
}
