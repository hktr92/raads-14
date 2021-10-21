/** @jsx h */
import { h } from "../../deps.ts";
import { IQuestion } from "./IQuestion.ts";

interface QuestionProp {
  onClick: (event: Event, option: number) => void;
  question: IQuestion;
}

const Question = ({ onClick, question }: QuestionProp) => (
  <div class="flex">
    <div class="flex-1">
      {question.title}
    </div>
    <div class="flex-1">
      <div class="grid grid-cols-4 gap-4">
        {question.options.map((option) => (
          <input
            type="checkbox"
            value={option}
            onClick={(e: Event) => console.log(e, option)}
          />
        ))}
      </div>
    </div>
  </div>
);

export { Question };
