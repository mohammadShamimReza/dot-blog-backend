-- CreateTable
CREATE TABLE "readLater" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "blogId" TEXT NOT NULL,

    CONSTRAINT "readLater_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "readLater" ADD CONSTRAINT "readLater_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "readLater" ADD CONSTRAINT "readLater_blogId_fkey" FOREIGN KEY ("blogId") REFERENCES "blog"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
