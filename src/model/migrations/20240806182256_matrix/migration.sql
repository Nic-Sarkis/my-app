-- CreateTable
CREATE TABLE "mtx_role" (
    "roleId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "Descriptions" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "UpdatedAt" TIMESTAMP(3),
    "Enabled" BOOLEAN NOT NULL,

    CONSTRAINT "mtx_role_pkey" PRIMARY KEY ("roleId")
);
