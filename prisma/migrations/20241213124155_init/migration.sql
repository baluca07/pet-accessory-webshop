/*
  Warnings:

  - A unique constraint covering the columns `[phone]` on the table `Department` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[phone]` on the table `Employee` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phone` to the `Department` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Department" ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "phone" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Department_phone_key" ON "Department"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "Employee_phone_key" ON "Employee"("phone");
