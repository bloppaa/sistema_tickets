import prisma from "@/lib/db";
import bcrypt from "bcrypt";
import md5 from "md5";

const data = {
  firstName: "Admin",
  lastName: "User",
  email: "admin@admin.com",
  rut: "11.111.111-1",
  password: "admin",
  phone: "56912345678",
};

const hashedPassword = await bcrypt.hash(data.password, 10);
const hashedEmail = md5(data.email.trim().toLowerCase());
const avatar = `https://www.gravatar.com/avatar/${hashedEmail}?s=256&d=mp`;

await prisma.person.create({
  data: {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    rut: data.rut,
    password: hashedPassword,
    role: "Admin",
    phone: data.phone,
    avatar,
  },
});
