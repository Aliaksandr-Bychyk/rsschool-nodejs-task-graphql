import { GraphQLList } from 'graphql';
import memberObjectType from './memberObjectType.js';

const memberObjectTypeList = new GraphQLList(memberObjectType);

export default memberObjectTypeList;
