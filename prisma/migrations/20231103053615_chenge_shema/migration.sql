/*
  Warnings:

  - You are about to drop the column `profileImg` on the `user` table. All the data in the column will be lost.
  - Added the required column `phone` to the `user` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `role` on the `user` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "role" AS ENUM ('user', 'admin');

-- AlterTable
ALTER TABLE "user" DROP COLUMN "profileImg",
ADD COLUMN     "phone" TEXT NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "role" NOT NULL;
