export interface JokeResponse {
  success: {
    total: number;
  };
  contents: {
    jokes: JokeMeta[];
    copyright: string;
  };
}

export interface JokeMeta {
  description: string;
  language: string;
  background: string;
  category: string;
  date: string;
  joke: Joke;
}

export interface Joke {
  title: string;
  lang: string;
  length: string;
  clean: string;
  racial: string;
  date: string;
  id: string;
  text: string;
}
