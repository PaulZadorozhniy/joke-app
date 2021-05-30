import axios from 'axios';
import { JokeResponse } from './interfaces';
import { config } from '../config';
import { Logger } from '@nestjs/common';

export async function getJokeOfTheDay() {
  try {
    const jokeResponse = await axios.get<JokeResponse>(
      `${config.jokes.baseUrl}/jod`,
    );
    return jokeResponse.data.contents.jokes[0].joke.text;
  } catch (error) {
    Logger.error(error);
    return 'We have something broken, what is a joke :)';
  }
}
