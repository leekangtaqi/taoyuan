import PostModelBuilder = require('./Post');
import context = require('../../../context/context');
 
export var Post = PostModelBuilder.Post(context.domainBuilder.main);