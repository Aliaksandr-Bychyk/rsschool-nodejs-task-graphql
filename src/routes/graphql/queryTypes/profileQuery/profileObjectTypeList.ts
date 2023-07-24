import { GraphQLList } from 'graphql';
import profileObjectType from './profileObjectType.js';

const profileObjectTypeList = new GraphQLList(profileObjectType);

export default profileObjectTypeList;
