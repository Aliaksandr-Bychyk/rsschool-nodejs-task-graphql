import { GraphQLList } from 'graphql';
import profilesObjectType from './profilesObjectType.js';

const profilesObjectTypeList = new GraphQLList(profilesObjectType);

export default profilesObjectTypeList;
