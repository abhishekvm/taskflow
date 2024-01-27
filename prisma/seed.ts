import { PrismaClient } from '@prisma/client';
import { users } from './fixtures';

const prisma = new PrismaClient();

async function seedUsers() {
    try {
        for (const user of users) {
            const result = await prisma.user.upsert({
                where: { email: user.email },
                update: {},
                create: {
                    email: user.email,
                    name: user.name,
                },
            });
            console.log({ result });
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function main() {
    try {
        await seedUsers();
    } catch (error) {
        console.error(error);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
}

main();
