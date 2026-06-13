-- CreateEnum
CREATE TYPE "Key" AS ENUM ('C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B');

-- CreateTable
CREATE TABLE "song" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "key" "Key" NOT NULL,
    "tempo" INTEGER NOT NULL,
    "style" TEXT NOT NULL,
    "notes" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "song_pkey" PRIMARY KEY ("id")
);
