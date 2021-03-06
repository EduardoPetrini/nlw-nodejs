import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { CreateTagController } from './controllers/CreateTagController';
import { CreateUserController } from './controllers/CreateUserController';
import { ListUserReceiverController } from './controllers/ListUserReceiverController';
import { ListUserSenderController } from './controllers/ListUserSenderController';
import { ListTagsController } from './controllers/LIstTagsController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ListUsersController } from './controllers/ListUsersController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserReceiverController = new ListUserReceiverController();
const listUserSenderController = new ListUserSenderController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post('/users', createUserController.handle);
router.get('/users', ensureAuthenticated, listUsersController.handle);
router.post('/login', authenticateUserController.handle);
router.post('/tags', ensureAuthenticated, ensureAdmin, createTagController.handle);
router.post('/compliments', ensureAuthenticated, createComplimentController.handle);
router.get('/users/compliments/send', ensureAuthenticated, listUserSenderController.handle);
router.get('/users/compliments/receive', ensureAuthenticated, listUserReceiverController.handle);
router.get('/tags', ensureAuthenticated, listTagsController.handle);

export { router };
