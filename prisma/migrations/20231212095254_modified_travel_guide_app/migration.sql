/*
  Warnings:

  - Added the required column `image` to the `Destination` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tips` to the `Destination` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Destination" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "tips" TEXT NOT NULL
);
INSERT INTO "new_Destination" ("description", "id", "name") SELECT "description", "id", "name" FROM "Destination";
DROP TABLE "Destination";
ALTER TABLE "new_Destination" RENAME TO "Destination";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
