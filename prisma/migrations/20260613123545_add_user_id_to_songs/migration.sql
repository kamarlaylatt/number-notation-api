/*
  Warnings:

  - Added the required column `userId` to the `song` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "song" ADD COLUMN     "userId" TEXT NOT NULL;

-- CreateIndex
CREATE INDEX "song_userId_idx" ON "song"("userId");

-- AddForeignKey
ALTER TABLE "song" ADD CONSTRAINT "song_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
