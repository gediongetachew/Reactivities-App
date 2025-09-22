-- CreateTable
CREATE TABLE "public"."Activity" (
    "Id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "Date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Description" TEXT NOT NULL,
    "CategoryId" INTEGER NOT NULL,
    "City" TEXT NOT NULL,
    "Venue" TEXT NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("Id")
);

-- CreateTable
CREATE TABLE "public"."Category" (
    "Id" SERIAL NOT NULL,
    "Name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "public"."Activity" ADD CONSTRAINT "Activity_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "public"."Category"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
