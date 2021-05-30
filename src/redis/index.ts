import * as redis from 'redis';
import { Logger } from '@nestjs/common';
import { promisify } from 'util';
import { config } from '../config';

const client = redis.createClient(config.redis);

client.on('error', (error) => {
  Logger.error(error);
});

const get = promisify(client.get).bind(client);
const set = promisify(client.set).bind(client);

export default {
  get,
  set,
};
