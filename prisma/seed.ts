import { categories, ingredients, products } from "./constants";
import { prisma } from "./prisma-client";
import { hashSync } from "bcrypt";

// генерация случайной цены
const randomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) * 10 + min * 10) / 10;
};

// генрация данных
async function up() {
  await prisma.user.createMany({
    data: [
      {
        fullName: "User Test",
        email: "user@test.ru",
        password: hashSync("123123", 10),
        verified: new Date(),
        role: "USER",
      },
      {
        fullName: "Admin Test",
        email: "admin@test.ru",
        password: hashSync("123123", 10),
        verified: new Date(),
        role: "ADMIN",
      },
    ],
  });

  await prisma.category.createMany({
    data: categories,
  });

  await prisma.ingredient.createMany({
    data: ingredients,
  });

  await prisma.product.createMany({
    data: products,
  });

  const pizza1 = await prisma.product.create({
    data: {
      name: "Пепперони фреш",
      imageUrl: "/pizzas/pepperoni-fresh.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(0, 5),
      },
    },
  });

  const pizza2 = await prisma.product.create({
    data: {
      name: "Сырная",
      imageUrl: "/pizzas/cheese.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(5, 10),
      },
    },
  });

  const pizza3 = await prisma.product.create({
    data: {
      name: "Чоризо фреш",
      imageUrl: "/pizzas/сhorizo​-fresh.avif",
      categoryId: 1,
      ingredients: {
        connect: ingredients.slice(10, 40),
      },
    },
  });

  await prisma.productItem.createManyAndReturn({
    data: [
      // Пепперони фреш
      {
        productId: pizza1.id,
        pizzaType: 1,
        size: 20,
        price: randomNumber(190, 600),
      },
      {
        productId: pizza1.id,
        pizzaType: 2,
        size: 30,
        price: randomNumber(190, 600),
      },
      {
        productId: pizza1.id,
        pizzaType: 2,
        size: 40,
        price: randomNumber(190, 600),
      },
      // Сырная
      {
        productId: pizza2.id,
        pizzaType: 1,
        size: 20,
        price: randomNumber(190, 600),
      },
      {
        productId: pizza2.id,
        pizzaType: 1,
        size: 30,
        price: randomNumber(190, 600),
      },
      {
        productId: pizza2.id,
        pizzaType: 1,
        size: 40,
        price: randomNumber(190, 600),
      },
      {
        productId: pizza2.id,
        pizzaType: 2,
        size: 20,
        price: randomNumber(190, 600),
      },
      {
        productId: pizza2.id,
        pizzaType: 2,
        size: 30,
        price: randomNumber(190, 600),
      },
      {
        productId: pizza2.id,
        pizzaType: 2,
        size: 40,
        price: randomNumber(190, 600),
      },
      // Чоризо фреш
      {
        productId: pizza3.id,
        pizzaType: 1,
        size: 20,
        price: randomNumber(190, 600),
      },
      {
        productId: pizza3.id,
        pizzaType: 2,
        size: 30,
        price: randomNumber(190, 600),
      },
      {
        productId: pizza3.id,
        pizzaType: 2,
        size: 40,
        price: randomNumber(190, 600),
      },
      // Остальные продукты
      {
        productId: 1,
        price: randomNumber(190, 600),
      },
      {
        productId: 2,
        price: randomNumber(190, 600),
      },
      {
        productId: 3,
        price: randomNumber(190, 600),
      },
      {
        productId: 4,
        price: randomNumber(190, 600),
      },
      {
        productId: 5,
        price: randomNumber(190, 600),
      },
      {
        productId: 6,
        price: randomNumber(190, 600),
      },
      {
        productId: 7,
        price: randomNumber(190, 600),
      },
      {
        productId: 8,
        price: randomNumber(190, 600),
      },
      {
        productId: 9,
        price: randomNumber(190, 600),
      },
      {
        productId: 10,
        price: randomNumber(190, 600),
      },
      {
        productId: 11,
        price: randomNumber(190, 600),
      },
      {
        productId: 12,
        price: randomNumber(190, 600),
      },
      {
        productId: 13,
        price: randomNumber(190, 600),
      },
      {
        productId: 14,
        price: randomNumber(190, 600),
      },
      {
        productId: 15,
        price: randomNumber(190, 600),
      },
      {
        productId: 16,
        price: randomNumber(190, 600),
      },
      {
        productId: 17,
        price: randomNumber(190, 600),
      },
    ],
  });

  await prisma.cart.createMany({
    data: [
      {
        userId: 1,
        totalAmount: 0,
        token: "111",
      },
      {
        userId: 2,
        totalAmount: 0,
        token: "222",
      },
    ],
  });

  await prisma.cartItem.create({
    data: {
      productItemId: 1,
      cartId: 2,
      quantity: 1,
      ingredients: {
        connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
      },
    },
  });
}

// удаление данных
async function down() {
  await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Category" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "ProductItem" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Ingredient" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "Cart" RESTART IDENTITY CASCADE`;
  await prisma.$executeRaw`TRUNCATE TABLE "CartItem" RESTART IDENTITY CASCADE`;
}

async function main() {
  try {
    await down();
    await up();
  } catch (e) {
    console.error(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

