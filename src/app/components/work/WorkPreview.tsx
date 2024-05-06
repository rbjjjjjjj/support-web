import Link from 'next/link';
import Image from 'next/image';
import { WorkMetadata } from "./WorkMetadata";

const WorkPreview = ({ date, slug, title, subtitle, image }: WorkMetadata) => {
  return (
    <Link href={`work/${slug}`}>
      <div className="block md:hover:opacity-50 cursor-pointer">
        <div className="relative w-full h-full aspect-square select-none">
          <Image
            src={image}
            alt={title}
            width={500}
            height={500}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="mt-2 p-4">
          <h2 className="text-2xl">{title}</h2>
          <p className="text-md opacity-75">{subtitle}</p>
          <p className="text-lg opacity-50">{date}</p>
        </div>
      </div>
    </Link>
  );
};

export default WorkPreview;
