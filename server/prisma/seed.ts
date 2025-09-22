import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // 1️⃣ Seed categories
  const categories = [
    { Name: 'Sports' },
    { Name: 'Music' },
    { Name: 'Education' },
    { Name: 'Technology' },
  ];

  const createdCategories = await Promise.all(
    categories.map((cat) => prisma.category.create({ data: cat }))
  );

  // 2️⃣ Seed activities
  const activities = [
    {
      Title: 'Football Tournament',
      Date: new Date('2025-09-20T10:00:00Z'),
      Description: 'Local football tournament for all ages.',
      CategoryId: createdCategories.find(c => c.Name === 'Sports')!.Id,
      City: 'Addis Ababa',
      Venue: 'National Stadium',
    },
    {
      Title: 'Live Jazz Night',
      Date: new Date('2025-09-25T19:00:00Z'),
      Description: 'Enjoy an evening of live jazz music.',
      CategoryId: createdCategories.find(c => c.Name === 'Music')!.Id,
      City: 'Addis Ababa',
      Venue: 'Blue Note Jazz Club',
    },
    {
      Title: 'Coding Workshop',
      Date: new Date('2025-10-01T09:00:00Z'),
      Description: 'Learn JavaScript and TypeScript in a hands-on workshop.',
      CategoryId: createdCategories.find(c => c.Name === 'Technology')!.Id,
      City: 'Addis Ababa',
      Venue: 'Tech Hub',
    },
    {
      Title: 'Math Seminar',
      Date: new Date('2025-10-05T14:00:00Z'),
      Description: 'Advanced topics in mathematics for students.',
      CategoryId: createdCategories.find(c => c.Name === 'Education')!.Id,
      City: 'Addis Ababa',
      Venue: 'University Hall',
    },
  ];

  await Promise.all(activities.map((act) => prisma.activity.create({ data: act })));

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
