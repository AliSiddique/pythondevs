import { PrismaClient } from '@prisma/client';

// let client: PrismaClient | null = null;

// declare const global: any & {
//   prisma?: PrismaClient;
// };

// if (typeof window === 'undefined') {
//   if (process.env.NODE_ENV === 'production') {
//     client = new PrismaClient();
//   } else {
//     if (!global.prisma) {
//       global.prisma = new PrismaClient();
//     }
//     client = global.prisma;
//   }
// }

// export default client;

declare global {
  // eslint-disable-next-line no-var
  var cachedPrisma: PrismaClient;
}

let prisma: PrismaClient;
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;
