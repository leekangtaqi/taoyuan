import PostSerivice = require('./Post');
import Promise = require('bluebird');
import context = require('../../../context/context');

export var post = Promise.promisifyAll(new PostSerivice(context));