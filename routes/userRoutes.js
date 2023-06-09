const express = require('express');
const router = express.Router();
const { getUser, getAllUsers, updateUser, deleteUser, followUser, unfollowUser, getFollowers, getFollowing } = require('../controllers/userCtrl')


// ** just use for route testing **
// router.get('/', async(req, res)=>{res.send("Test User Route")}) 

// Get User by ID
router.get('/:id', getUser);

// Get all users
router.get('/', getAllUsers);

// Get all users
router.get('/following/:id', getFollowing);

// Get all users
router.get('/followers/:id', getFollowers);

// Update user
router.put('/:id', updateUser);

// Delete a user
router.delete('/:id', deleteUser);

// Follow a User
router.put('/:id/follow', followUser);

// Unfollow a User
router.put('/:id/unfollow', unfollowUser);

module.exports = router;


