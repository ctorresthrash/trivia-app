import {
  TriviaCategory,
  TriviaQuestion,
  User,
  TriviaQuestionAnswer,
  ActionWithPayload,
} from "../types";

export interface UserState {
  user?: User;
  startTime?: Date;
  category?: TriviaCategory;
  questions: TriviaQuestion[];
  currentQuestion?: TriviaQuestion;
  answers: TriviaQuestionAnswer[];
}

export enum TYPES {
  setUser = "SET_USER",
  setStartTime = "SET_START_TIME",
  setCategory = "SET_CATEGORY",
  setQuestions = "SET_QUESTIONS",
  setCurrentQuestion = "SET_CURRENT_QUESTION",
  addQuestionAnswer = "ADD_QUESTION_ANSWER",
}

export const initialState: UserState = JSON.parse(
  localStorage.getItem("userState") as string
) || {
  user: undefined,
  startTime: undefined,
  questions: [],
  currentQuestion: undefined,
  answers: [],
};

export const actions = {
  setUser: (user: User): ActionWithPayload<User> => ({
    type: TYPES.setUser,
    payload: user,
  }),
  setStartTime: (startTime: Date): ActionWithPayload<Date> => ({
    type: TYPES.setStartTime,
    payload: startTime,
  }),
  setCategory: (
    category: TriviaCategory
  ): ActionWithPayload<TriviaCategory> => ({
    type: TYPES.setCategory,
    payload: category,
  }),
  setQuestions: (
    questions: TriviaQuestion[]
  ): ActionWithPayload<TriviaQuestion[]> => ({
    type: TYPES.setQuestions,
    payload: questions,
  }),
  setCurrentQuestion: (
    question: TriviaQuestion
  ): ActionWithPayload<TriviaQuestion> => ({
    type: TYPES.setCurrentQuestion,
    payload: question,
  }),
  addQuestionAnswer: (
    answer: TriviaQuestionAnswer
  ): ActionWithPayload<TriviaQuestionAnswer> => ({
    type: TYPES.addQuestionAnswer,
    payload: answer,
  }),
};

export type UserReducerAction = ActionWithPayload<
  | User
  | Date
  | TriviaQuestion
  | TriviaCategory
  | TriviaQuestion[]
  | TriviaQuestionAnswer
>;

export default function userReducer(
  state: UserState,
  action: UserReducerAction
): UserState {
  switch (action.type) {
    case TYPES.setUser: {
      const user = action.payload as User;
      return {
        ...state,
        user,
      };
    }

    case TYPES.setStartTime: {
      const startTime = action.payload as Date;
      return {
        ...state,
        startTime,
      };
    }

    case TYPES.setCategory: {
      const category = action.payload as TriviaCategory;
      return {
        ...state,
        category,
      };
    }

    case TYPES.setQuestions: {
      const questions = action.payload as [TriviaQuestion];
      return {
        ...state,
        questions,
      };
    }

    case TYPES.setQuestions: {
      const currentQuestion = action.payload as TriviaQuestion;
      return {
        ...state,
        currentQuestion,
      };
    }

    case TYPES.addQuestionAnswer: {
      const answer = action.payload as TriviaQuestionAnswer;
      return {
        ...state,
        answers: [...state.answers, answer],
      };
    }
    default:
      return state;
  }
}
