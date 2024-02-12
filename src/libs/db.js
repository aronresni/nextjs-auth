//sirve para conectarnos con prisma, es como el DB de express
import { PrismaClient } from "@prisma/client"

const PrismaClientSingleton = () => {
    return new PrismaClient();
};

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? PrismaClientSingleton;

export default prisma

if (process.env.NODE_ENV == "production") globalForPrisma.prisma = prisma;