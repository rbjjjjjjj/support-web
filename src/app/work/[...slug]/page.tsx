import React from 'react';
import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getWorkMetadata from "../../components/work/getWorkMetadata";
import type { Metadata } from 'next';
import Image from 'next/image';

const posts = getWorkMetadata();

export const metadata: Metadata = {
  title: '', // Initialize the title
};

const getWorkContent = (slug: string) => {
  const folder = "public/works/work/";
  const file = `${folder}${slug}.md`;

  // Check if file exists
  if (!fs.existsSync(file)) {
    // Return null to indicate not found
    return null;
  }

  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  return posts.map((post) => ({
    params: {
      slug: post.slug
    }
  }));
};

const WorkPostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getWorkContent(slug);

  // If post is not found, it will return null, no need to call notFound()

  if (!post) {
    return null; // Return null if post is not found
  }

  // Update metadata title dynamically based on the post content
  metadata.title = post.data.title || metadata.title;

  // Function to replace markdown image tags with Next.js Image components
  const renderImage = (props: any) => {
    return (
      <Image
        src={props.src}
        alt={props.alt}
        width={1000}
        height={1000}
      />
    );
  };

  return (
    <>
      <div className="z-50 px-4">
        <div className="mx-auto max-w-2xl">
          <article>
            <div className="text-center py-8 md:py-16">
              <h1 className="md:text-6xl text-4xl break-word">{post.data.title}</h1>
              <p className="md:text-2xl text-xl">{post.data.date}</p>
            </div>
            <Markdown 
              options={{
                overrides: {
                  img: renderImage // Override the img tag with the renderImage function
                }
              }}
            >
              {post.content}
            </Markdown>
          </article>
        </div>
      </div>
    </>
  );  
};

export default WorkPostPage;
