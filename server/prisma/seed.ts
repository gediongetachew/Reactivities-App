import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  // 1️⃣ Create Users
  const user1 = await prisma.user.create({
    data: {
      name: "Alice",
      email: "alice@example.com",
      password: "hashed-password-1",
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob@example.com",
      password: "hashed-password-2",
    },
  });

  const user3 = await prisma.user.create({
    data: {
      name: "Charlie",
      email: "charlie@example.com",
      password: "hashed-password-3",
    },
  });

  console.log("✅ Users created:", { user1, user2, user3 });

  // 2️⃣ Create Categories
  const hiking = await prisma.category.create({
    data: { Name: "Hiking" },
  });

  const coding = await prisma.category.create({
    data: { Name: "Coding" },
  });

  const music = await prisma.category.create({
    data: { Name: "Music" },
  });

  console.log("✅ Categories created:", { hiking, coding, music });

  // 3️⃣ Create Activities
  const activity1 = await prisma.activity.create({
    data: {
      Title: "Morning Hike",
      Description: "Join us for a Saturday morning hike at Entoto!",
      City: "Addis Ababa",
      Venue: "Mount Entoto",
      CreatorId: user1.Id,
      CategoryId: hiking.Id,
    },
  });

  const activity2 = await prisma.activity.create({
    data: {
      Title: "React Workshop",
      Description: "Learn React with hands-on examples.",
      City: "Addis Ababa",
      Venue: "ICT Park",
      CreatorId: user2.Id,
      CategoryId: coding.Id,
    },
  });

  const activity3 = await prisma.activity.create({
    data: {
      Title: "Jazz Night",
      Description: "Live jazz music and networking.",
      City: "Addis Ababa",
      Venue: "Fendika Cultural Center",
      CreatorId: user3.Id,
      CategoryId: music.Id,
    },
  });

  console.log("✅ Activities created:", { activity1, activity2, activity3 });

  // 4️⃣ Join Activities
  await prisma.joinedActivities.createMany({
    data: [
      { userId: user2.Id, activityId: activity1.Id }, // Bob joins Alice's hike
      { userId: user3.Id, activityId: activity1.Id }, // Charlie joins Alice's hike
      { userId: user1.Id, activityId: activity2.Id }, // Alice joins Bob's workshop
    ],
  });

  console.log("✅ Joined activities created");

  // 5️⃣ Follow Relationships
  await prisma.userFollow.createMany({
    data: [
      { followerId: user1.Id, followingId: user2.Id }, // Alice follows Bob
      { followerId: user1.Id, followingId: user3.Id }, // Alice follows Charlie
      { followerId: user3.Id, followingId: user1.Id }, // Charlie follows Alice
    ],
  });

  console.log("✅ Follow relationships created");

  console.log("🎉 Seeding completed!");
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
