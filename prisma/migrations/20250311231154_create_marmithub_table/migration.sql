-- CreateTable
CREATE TABLE "MarmitHub" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_food" TIMESTAMP(3) NOT NULL,
    "disp_ped" BOOLEAN NOT NULL,
    "cod_tamanho" TEXT NOT NULL,
    "valor_tamanho" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "MarmitHub_pkey" PRIMARY KEY ("id")
);
