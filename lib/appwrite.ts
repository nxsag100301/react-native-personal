import {Account, Client, Databases} from 'react-native-appwrite';
import Config from 'react-native-config';

export const client = new Client()
  .setEndpoint(Config.APP_WRITE_ENDPOINT!)
  .setProject(Config.APP_WRITE_PROJECT_ID!)
  .setPlatform(Config.APP_WRITE_PLATFORM!);

export const account = new Account(client);
