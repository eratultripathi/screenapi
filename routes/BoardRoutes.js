import express from "express";
import Boards from "../models/BoardsModel.js";

const boardRoutes = express.Router();


boardRoutes.get("/", async (req, res) => {
  try {
    const boards = await Boards.find();
    res.status(200).json(boards);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to fetch boards data from the database." });
  }
});


boardRoutes.post("/", async (req, res) => {
  const data = req.body;
  try {
    const boards = new Boards(data);
    await boards.save();

    res.status(201).json(boards);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save data to the database." });
  }
});


boardRoutes.delete("/:id", async (req, res) => {
  const boardId = req.params.id;
  try {
    // Find the board by ID and delete it
    const deletedBoard = await Boards.findByIdAndDelete(boardId);
    if (!deletedBoard) {
      return res.status(404).json({ message: "Board not found." });
    }
    res.status(200).json({ message: "Board deleted successfully." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Failed to delete board from the database." });
  }
});


boardRoutes.put("/:id", async (req, res) => {
  const boardId = req.params.id;
  const updatedData = req.body;

  try {
    const board = await Boards.findById(boardId);
    if (!board) {
      return res.status(404).json({ message: "Board not found" });
    }
    board.name = updatedData.name;
    board.isActive = updatedData.isActive;
    board.columns = updatedData.columns; //update the columns 
    await board.save();

    res.status(200).json(board);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update board data" });
  }
});

export default boardRoutes;
