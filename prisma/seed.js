// TODO
/**
 * ! Script para llenar la base de datos con datos de prueba
 * ! Eliminar antes de pasar a producción
 */

import { PrismaClient } from "@prisma/client";
import { persons, tickets } from "./data.js";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

async function main() {
  for (const person of persons) {
    const hashedPassword = await bcrypt.hash(person.password, 10);
    person.password = hashedPassword;

    await prisma.person.upsert({
      where: { email: person.email },
      update: {},
      create: person,
    });
  }

  for (const ticket of tickets) {
    await prisma.ticket.create({
      data: {
        title: ticket.title,
        description: ticket.description,
        type: ticket.type,
        priority: ticket.priority,
        status: ticket.status,
        createdAt: ticket.createdAt,
        client: { connect: { id: ticket.clientId } },
        user: ticket.userId ? { connect: { id: ticket.userId } } : undefined,
      },
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Unexpected error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });