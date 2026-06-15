import prisma from "../../lib/prisma.js";
import { Key, Prisma } from "../../../generated/prisma/client.js";

export const getMySongs = (userId: string) => {
  return prisma.song.findMany({ where: { userId }, orderBy: { createdAt: "desc" } });
};

export const getMySongById = (id: string, userId: string) => {
  return prisma.song.findFirst({ where: { id, userId } });
};

export const createSong = (userId: string, data: {
  title: string;
  key: Key;
  tempo: number;
  style: string;
  notes?: Prisma.InputJsonValue;
}) => {
  return prisma.song.create({ data: { ...data, userId } });
};

export const updateSong = (id: string, userId: string, data: {
  title?: string;
  key?: Key;
  tempo?: number;
  style?: string;
  notes?: Prisma.InputJsonValue;
}) => {
  return prisma.song.update({ where: { id, userId }, data });
};

export const deleteSong = (id: string, userId: string) => {
  return prisma.song.delete({ where: { id, userId } });
};
