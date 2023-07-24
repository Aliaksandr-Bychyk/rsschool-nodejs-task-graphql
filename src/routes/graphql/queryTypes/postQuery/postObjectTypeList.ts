import { GraphQLList } from 'graphql';
import postObjectType from './postObjectType.js';

const postObjectTypeList = new GraphQLList(postObjectType);

export default postObjectTypeList;
