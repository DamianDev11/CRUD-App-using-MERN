import express from 'express';
import { addUser } from '../controller/user-controller.js';
import { getUsers, getUser , editUser ,deleteUser } from '../controller/user-controller.js';
//import { deleteUser } from '../../client/src/service/api.js';
//import { editUser } from '../../client/src/service/api.js';


const router = express.Router();


router.post('/add', addUser);
router.get('/all', getUsers);
router.get('/:id', getUser);
router.post('/:id', editUser);
router.delete('/:id', deleteUser);


export default router;