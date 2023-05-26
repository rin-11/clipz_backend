const express = require('express');
const router = express.Router();
const { createBoard, getBoard, getAllBoards, updateBoard, deleteBoard } = require('../controllers/boardCtrl')


// Create Board
router.post('/', createBoard)

// Get Board by ID
router.get('/:id', getBoard);

// Get all Boards
router.get('/', getAllBoards);

// Update Board by ID
router.put('/:id', updateBoard);

// Delete Board by ID
router.delete('/:id', deleteBoard);


// Like Board by ID




module.exports = router;