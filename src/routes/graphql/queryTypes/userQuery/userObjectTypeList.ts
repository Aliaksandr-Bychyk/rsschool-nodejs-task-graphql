import { GraphQLList } from 'graphql';
import userObjectType from './userObjectType.js';

const userObjectTypeList = new GraphQLList(userObjectType);

export default userObjectTypeList;
