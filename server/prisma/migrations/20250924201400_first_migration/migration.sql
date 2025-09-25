/*
  Warnings:

  - Added the required column `CreatorId` to the `Activity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Activity" ADD COLUMN     "CreatorId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "public"."User" (
    "Id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profileImg" TEXT DEFAULT 'https://www.istockphoto.com/photos/profile',

    CONSTRAINT "User_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."JoinedActivities" (
    "userId" INTEGER NOT NULL,
    "activityId" INTEGER NOT NULL,
    "joinedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JoinedActivities_pkey" PRIMARY KEY ("userId","activityId")
);

-- CreateTable
CREATE TABLE "public"."UserFollow" (
    "followerId" INTEGER NOT NULL,
    "followingId" INTEGER NOT NULL,

    CONSTRAINT "UserFollow_pkey" PRIMARY KEY ("followerId","followingId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- AddForeignKey
ALTER TABLE "public"."Activity" ADD CONSTRAINT "Activity_CreatorId_fkey" FOREIGN KEY ("CreatorId") REFERENCES "public"."User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."JoinedActivities" ADD CONSTRAINT "JoinedActivities_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."JoinedActivities" ADD CONSTRAINT "JoinedActivities_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "public"."Activity"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserFollow" ADD CONSTRAINT "UserFollow_followerId_fkey" FOREIGN KEY ("followerId") REFERENCES "public"."User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."UserFollow" ADD CONSTRAINT "UserFollow_followingId_fkey" FOREIGN KEY ("followingId") REFERENCES "public"."User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
