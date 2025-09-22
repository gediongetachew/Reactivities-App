-- DropForeignKey
ALTER TABLE "public"."Activity" DROP CONSTRAINT "Activity_CategoryId_fkey";

-- AddForeignKey
ALTER TABLE "public"."Activity" ADD CONSTRAINT "Activity_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "public"."Category"("Id") ON DELETE CASCADE ON UPDATE CASCADE;
