// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Users, Modules, Contents } = initSchema(schema);

export {
  Users,
  Modules,
  Contents
};