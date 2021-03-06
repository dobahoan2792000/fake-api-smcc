import { faker } from "@faker-js/faker";
import fs from "fs";
let data = [];
for (var i = 0; i < 22; i++) {
  data.push({
    id: faker.database.mongodbObjectId(),
    link: faker.internet.url(),
    name: faker.name.findName(),
    avatar: faker.internet.avatar(),
    latelyPost: faker.lorem.sentence(),
    lastestAt: faker.date.between(),
    totalPost: faker.datatype.number(),
    createdAt: faker.date.between(),
    updatedAt: faker.date.between(),
  });
}
setTimeout(() => {
  fs.writeFile("author.json", JSON.stringify(data), "utf8", (callback) => {});
}, 1000);


// data.push({
//   id: faker.database.mongodbObjectId(),
//   sourceId: {
//     id: faker.database.mongodbObjectId(),
//     link: faker.internet.url(),
//     name: faker.name.findName(),
//     avatar: faker.internet.avatar(),
//     type: faker.helpers.arrayElement([
//       "WEBSITE",
//       "FB_PAGE",
//       "FB_GROUP",
//       "FB_ACCOUNT",
//     ]),
//     status: faker.helpers.arrayElement(["LIVE", "DEAD", "WAITING"]),
//     totalContent: faker.datatype.number(10),
//     createdAt: faker.date.between(),
//     updatedAt: faker.date.between(),
//   },
//   authorId: {
//     _id: faker.database.mongodbObjectId(),
//     link: faker.internet.url(),
//     name: faker.name.findName(),
//     avatar: faker.internet.avatar(),
//     createdAt: faker.date.between(),
//     updatedAt: faker.date.between(),
//   },
//   topicIds:
//     faker.helpers.arrayElements([
//       {
//         id: faker.database.mongodbObjectId(),
//         name: faker.name.findName(),
//         keywords: faker.helpers.arrayElements([
//           faker.word.adjective(),
//           faker.word.adjective(),
//           faker.word.adjective(),
//           faker.word.adjective(),
//         ]),
//         categories: faker.helpers.arrayElements([
//           faker.word.adjective(),
//           faker.word.adjective(),
//           faker.word.adjective(),
//           faker.word.adjective(),
//         ]),
//         createdAt: faker.date.between(),
//         updatedAt: faker.date.between(),
//       },
//       {
//         id: faker.database.mongodbObjectId(),
//         name: faker.name.findName(),
//         keywords: faker.helpers.arrayElements([
//           faker.word.adjective(),
//           faker.word.adjective(),
//           faker.word.adjective(),
//           faker.word.adjective(),
//         ]),
//         categories: faker.helpers.arrayElements([
//           faker.word.adjective(),
//           faker.word.adjective(),
//           faker.word.adjective(),
//           faker.word.adjective(),
//         ]),
//         createdAt: faker.date.between(),
//         updatedAt: faker.date.between(),
//       },
//       {
//         id: faker.database.mongodbObjectId(),
//         name: faker.name.findName(),
//         keywords: faker.helpers.arrayElements([
//           faker.word.adjective(),
//           faker.word.adjective(),
//           faker.word.adjective(),
//           faker.word.adjective(),
//         ]),
//         categories: faker.helpers.arrayElements([
//           faker.word.adjective(),
//           faker.word.adjective(),
//           faker.word.adjective(),
//           faker.word.adjective(),
//         ]),
//         createdAt: faker.date.between(),
//         updatedAt: faker.date.between(),
//       }
//     ]),
//   // topicIds: [
//   //   {
//   //     id: faker.database.mongodbObjectId(),
//   //     name: faker.name.findName(),
//   //     keywords: faker.helpers.arrayElements([
//   //       faker.word.adjective(),
//   //       faker.word.adjective(),
//   //       faker.word.adjective(),
//   //       faker.word.adjective(),
//   //     ]),
//   //     categories: faker.helpers.arrayElements([
//   //       faker.word.adjective(),
//   //       faker.word.adjective(),
//   //       faker.word.adjective(),
//   //       faker.word.adjective(),
//   //     ]),
//   //     createdAt: faker.date.between(),
//   //     updatedAt: faker.date.between(),
//   //   },
//   // ],
//   link: faker.internet.url(),
//   type: faker.helpers.arrayElement(["CREATED", "RUNNING", "LOST", "SUCCESS"]),
//   status: faker.helpers.arrayElement([
//     "CREATED",
//     "RUNNING",
//     "LOST",
//     "SUCCESS",
//   ]),
//   type: faker.helpers.arrayElement(["WEBSITE_POST", "FB_POST"]),
//   textContent: faker.lorem.paragraphs(),
//   textContentTsvec: faker.lorem.paragraphs(),
//   imageContents: faker.helpers.arrayElements([
//     faker.image.abstract(),
//     faker.image.abstract(),
//     faker.image.abstract(),
//     faker.image.abstract(),
//   ]),
//   videoContents: faker.helpers.arrayElements([
//     faker.image.abstract(),
//     faker.image.abstract(),
//     faker.image.abstract(),
//     faker.image.abstract(),
//   ]),
//   likes: faker.datatype.number(30),
//   shares: faker.datatype.number(10),
//   comments: faker.datatype.number(25),
//   totalReactions: faker.datatype.number(25),
//   reactionsPerHour: faker.datatype.float(),
//   commentIds: faker.helpers.arrayElements([
//     {
//       id: faker.database.mongodbObjectId(),
//       authorId: {
//         id: faker.database.mongodbObjectId(),
//         link: faker.internet.url(),
//         name: faker.name.findName(),
//         avatar: faker.internet.avatar(),
//         createdAt: faker.date.between(),
//         updatedAt: faker.date.between(),
//       },
//       contentId: faker.database.mongodbObjectId(),
//       textContent: faker.lorem.paragraph(),
//       imageContent: faker.image.abstract(),
//       videoContent: faker.image.abstract(),
//       link: faker.internet.url(),
//       likes: faker.datatype.number(30),
//       status: faker.helpers.arrayElement(["LIVE", "DEAD", "WAITING"]),
//       postedAt: faker.date.between(),
//       createdAt: faker.date.between(),
//       updatedAt: faker.date.between(),
//     },
//     {
//       id: faker.database.mongodbObjectId(),
//       authorId: {
//         id: faker.database.mongodbObjectId(),
//         link: faker.internet.url(),
//         name: faker.name.findName(),
//         avatar: faker.internet.avatar(),
//         createdAt: faker.date.between(),
//         updatedAt: faker.date.between(),
//       },
//       contentId: faker.database.mongodbObjectId(),
//       textContent: faker.lorem.paragraph(),
//       imageContent: faker.image.abstract(),
//       videoContent: faker.image.abstract(),
//       link: faker.internet.url(),
//       likes: faker.datatype.number(30),
//       status: faker.helpers.arrayElement(["LIVE", "DEAD", "WAITING"]),
//       postedAt: faker.date.between(),
//       createdAt: faker.date.between(),
//       updatedAt: faker.date.between(),
//     },
//     {
//       id: faker.database.mongodbObjectId(),
//       authorId: {
//         id: faker.database.mongodbObjectId(),
//         link: faker.internet.url(),
//         name: faker.name.findName(),
//         avatar: faker.internet.avatar(),
//         createdAt: faker.date.between(),
//         updatedAt: faker.date.between(),
//       },
//       contentId: faker.database.mongodbObjectId(),
//       textContent: faker.lorem.paragraph(),
//       imageContent: faker.image.abstract(),
//       videoContent: faker.image.abstract(),
//       link: faker.internet.url(),
//       likes: faker.datatype.number(30),
//       status: faker.helpers.arrayElement(["LIVE", "DEAD", "WAITING"]),
//       postedAt: faker.date.between(),
//       createdAt: faker.date.between(),
//       updatedAt: faker.date.between(),
//     },
//   ]),
//   createdAt: faker.date.between(),
//   updatedAt: faker.date.between(),
// });