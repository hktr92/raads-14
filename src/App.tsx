/** @jsx h */
import { h } from "../deps.ts";
import { IQuestion } from "./component/IQuestion.ts";
import { Question } from "./component/Question.tsx";

const App = () => {
  const questions: IQuestion[] = [
    { title: "question 1", options: [3, 2, 1, 0] },
    { title: "question 2", options: [3, 2, 1, 0] },
    { title: "question 3", options: [3, 2, 1, 0] },
  ];

  const test = (option: number): void => {
    console.debug(option);
  };

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
          {questions.map((q) => <Question onClick={(e: Event, option: number) => {
              e.preventDefault()

              test(option)
          }} question={q} />)}
        </div>
      </body>
    </html>
  );
};

export { App };
