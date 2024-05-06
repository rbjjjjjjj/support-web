import { Metadata } from 'next';
import WorkGallery from '../components/workpage/WorkGallery';

export const metadata: Metadata = {
  title: 'slug page',
  description: 'slug page',
};

const IndexSupportPage = () => {
  return (
    <>
      <WorkGallery />
    </>
  );
};

export default IndexSupportPage;