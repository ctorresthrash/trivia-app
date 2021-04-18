export interface Action {
  type: string;
}

export interface ActionWithPayload<T> extends Action {
  payload: T;
}

export type User = {
  firstName: string;
  lastName: string;
  email: string;
};

export type TriviaCategory = {
  id: number;
  name: string;
};

export type TriviaQuestion = {
  id: number;
  question: string;
  type: "multiple" | "boolean";
  correctAnswer: string;
  incorrectAnswers: [string];
};

export class TriviaQuestionAnswer {
  constructor(public question: TriviaQuestion, public answer: string) {}

  isCorrect() {
    this.question.correctAnswer === this.answer;
  }
}
