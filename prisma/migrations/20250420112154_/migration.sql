-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_BuyerMaster" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "customerName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT,
    "city" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_BuyerMaster" ("address", "city", "createdAt", "customerName", "email", "id", "password") SELECT "address", "city", "createdAt", "customerName", "email", "id", "password" FROM "BuyerMaster";
DROP TABLE "BuyerMaster";
ALTER TABLE "new_BuyerMaster" RENAME TO "BuyerMaster";
CREATE UNIQUE INDEX "BuyerMaster_email_key" ON "BuyerMaster"("email");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
