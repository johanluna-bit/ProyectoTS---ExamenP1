-- CreateTable
CREATE TABLE "Funtions" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "returnType" TEXT,
    "detail" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "Parameters" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "description" TEXT,
    "type" TEXT,
    "defaultValue" TEXT,
    "functionId" TEXT,
    "userId" INTEGER NOT NULL,
    CONSTRAINT "Parameters_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Funtions" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
