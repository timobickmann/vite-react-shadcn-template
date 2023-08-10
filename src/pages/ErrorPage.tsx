import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <div className="container mx-auto flex flex-col gap-5 items-center my-10">
        <h1 className="text-3xl">Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>
            {isRouteErrorResponse(error)
              ? error.error?.message || error.statusText
              : "Unknown error message"}
          </i>
        </p>
      </div>
    </>
  );
}
export default ErrorPage;
