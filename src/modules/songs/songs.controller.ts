import { Request, Response } from "express";
import * as songsService from "./songs.service.js";

export const getAll = async (req: Request, res: Response) => {
  const songs = await songsService.getMySongs(req.user!.id);
  res.json(songs);
};

export const getOne = async (req: Request<{ id: string }>, res: Response) => {
  const song = await songsService.getMySongById(req.params.id, req.user!.id);
  if (!song) return res.status(404).json({ message: "Song not found" });
  res.json(song);
};

export const create = async (req: Request, res: Response) => {
  const song = await songsService.createSong(req.user!.id, req.body);
  res.status(201).json(song);
};

export const update = async (req: Request<{ id: string }>, res: Response) => {
  const song = await songsService.updateSong(req.params.id, req.user!.id, req.body);
  res.json(song);
};

export const remove = async (req: Request<{ id: string }>, res: Response) => {
  await songsService.deleteSong(req.params.id, req.user!.id);
  res.status(204).send();
};
