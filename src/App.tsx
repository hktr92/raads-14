/** @jsx h */
import { h } from "../deps.ts";

const App = () => {
  return (
    <html>
      <head>
        <title>RAADS-14 Screen</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.17/tailwind.min.css"
          integrity="sha512-yXagpXH0ulYCN8G/Wl7GK+XIpdnkh5fGHM5rOzG8Kb9Is5Ua8nZWRx5/RaKypcbSHc56mQe0GBG0HQIGTmd8bw=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </head>
      <body>
        <div class="container mx-auto">
          <div class="flex">
            <div class="flex-1">
              question 1
            </div>
            <div class="flex-1">
              <div class="grid grid-cols-4 gap-4">
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="flex-1">
              question 2
            </div>
            <div class="flex-1">
              <div class="grid grid-cols-4 gap-4">
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
                <input type="checkbox" />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
};

export { App };
