import records from './data/lessons.json';

type Answer = { text: string; feedback: string; correct?: boolean };
type Question = { prompt: string; language: string; answers: Answer[] };

export type Lesson = {
  slug: string;
  title: string;
  subtitle: string;
  topic: string;
  scene: string;
  dialogue: { speaker: string; cs: string; uk: string }[];
  questions: Question[];
  task: string;
  label: string;
  starter: string;
  sample: string;
  check: string;
  phrase: string;
  translation: string;
};

export const lessons: Lesson[] = records;
export const lessonPath = '/uroky/' + lessons[0].slug;
