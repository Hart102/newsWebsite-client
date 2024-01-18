export const proxy = "https://mini-blog-server.vercel.app";

export const imageUrl = (img_id) =>
  `https://cloud.appwrite.io/v1/storage/buckets/654eebaf29a4647e9656/files/${img_id}/view?project=2222&mode=admin`;

export const pages = ["breaking", "trending", "politics", "sports"];

export const routes = [
  "/",
  "/blog/article",
  "/blog",
  "/blog/dashboard",
  "/blog/create",
];
