import { A } from "@solidjs/router";

export default function NotFound() {
  return (
    <main class="text-center mx-auto text-gray-700 h-[80vh] flex flex-col justify-center">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        404 - Page Not Found
      </h1>
      <p class="my-4 text-gray-200 text-lg">
        Go back to {" "}
        <A href="/" class="text-sky-600 hover:underline">
          Home
        </A>
      </p>
    </main>
  );
}
