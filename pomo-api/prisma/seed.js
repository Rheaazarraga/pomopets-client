const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const new_user1 = await prisma.user.upsert({
    where: { email: 'name1@mail.com' },
    update: {},
    create: {
      username: 'user1',
      email: 'name1@mail.com',
      password: '123'
    },
  });

  const new_user2 = await prisma.user.upsert({
    where: { email: 'name2@mail.com' },
    update: {},
    create: {
      username: 'user2',
      email: 'name2@mail.com',
      password: '123'
    },
  });

  const new_user3 = await prisma.user.upsert({
    where: { email: 'name3@mail.com' },
    update: {},
    create: {
      username: 'user3',
      email: 'name3@mail.com',
      password: '123'
    },
  });

  const new_pet1 = await prisma.pet.upsert({
    where: { name: 'petName2' },
    update: {},
    create: {
      name: 'petName2',
    }
  });

  const new_pet2 = await prisma.pet.upsert({
    where: { name: 'petName3' },
    update: {},
    create: {
      name: 'petName3',
    }
  });

  const new_pet3 = await prisma.pet.upsert({
    where: { name: 'petName1' },
    update: {},
    create: {
      name: 'petName1',
    }
  });

  const user_rel1 = await prisma.user_pet.upsert({
    where: { id: 1 },
    update: {},
    create: {
      user_id: new_user1.id,
      pet_id: new_pet1.id
    }
  });

  const user_rel2 = await prisma.user_pet.upsert({
    where: { id: 2 },
    update: {},
    create: {
      user_id: new_user2.id,
      pet_id: new_pet2.id
    }
  });

  const user_rel3 = await prisma.user_pet.upsert({
    where: { id: 3 },
    update: {},
    create: {
      user_id: new_user3.id,
      pet_id: new_pet3.id
    }
  });

  console.log({ new_user1, new_pet1, new_pet2, new_pet3, user_rel1, user_rel2, user_rel3 })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  });