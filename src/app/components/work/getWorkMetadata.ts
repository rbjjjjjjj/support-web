import fs from "fs";
import matter from "gray-matter";
import { WorkMetadata } from "./WorkMetadata";

const getWorkMetadata = (): WorkMetadata[] => {
  const folder = "public/works/work/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date, // Keep as string
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
      image: matterResult.data.image
    };
  });

  // Sort posts by date in descending order, assuming dates are ISO-formatted strings (YYYY-MM-DD)
  posts.sort((a, b) => b.date.localeCompare(a.date));

  return posts;
};

export default getWorkMetadata;
