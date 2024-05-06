import getWorkMetadata from "../work/getWorkMetadata";
import WorkPreview from "../work/WorkPreview";

const WorkGallery = () => {
  const WorkMetadata = getWorkMetadata();

  return (
    <div>
      <h1 className="text-4xl p-16">SELECTED WORK</h1> {/* Displaying "Work" as a heading above the gallery */}
      <div className="grid grid-cols-1 md:grid-cols-4">
        {WorkMetadata.map((post) => (
          <WorkPreview key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
};

export default WorkGallery;
