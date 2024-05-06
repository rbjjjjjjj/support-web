import Link from 'next/link';
import Image from 'next/image';
import { WorkMetadata } from "./WorkMetadata";

const IndexWorkPreview = ({ date, slug, title, subtitle, image }: WorkMetadata) => {
  return (
    <Link href={`work/${slug}`}>
      <div className="block rounded-lg md:hover:opacity-50 cursor-pointer">
        <div className="relative w-full h-0 pb-[100%]">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </Link>
  );
};

export default IndexWorkPreview;