// components/BeritaSection.tsx
import Aside from 'app/components/aside';
import Image from 'next/image';

type CampusItem = {
  title: string;
  image: string;
  description: string;
  link: string;
};

const campusItems: CampusItem[] = [
  {
    title: 'Seminar Proposal Angkatan I',
    image: '/images/berita/berita-1.jpeg',
    description:
      'A residential campus with diverse housing, exceptional dining, health care and over 600 student',
    link: '#',
  },
  {
    title: 'Arts & Culture',
    image: '/images/latest-new/latest-new-02.png',
    description:
      'A residential campus with diverse housing, exceptional dining, health care and over 600 student',
    link: '#',
  },
  {
    title: 'Recreation & Wellness',
    image: '/images/latest-new/latest-new-03.png',
    description:
      'A residential campus with diverse housing, exceptional dining, health care and over 600 student',
    link: '#',
  },
  {
    title: 'Recreation & Wellness',
    image: '/images/latest-new/latest-new-03.png',
    description:
      'A residential campus with diverse housing, exceptional dining, health care and over 600 student',
    link: '#',
  },
  {
    title: 'Recreation & Wellness',
    image: '/images/latest-new/latest-new-03.png',
    description:
      'A residential campus with diverse housing, exceptional dining, health care and over 600 student',
    link: '#',
  },
  {
    title: 'Recreation & Wellness',
    image: '/images/latest-new/latest-new-03.png',
    description:
      'A residential campus with diverse housing, exceptional dining, health care and over 600 student',
    link: '#',
  },
];

const BeritaSection: React.FC = () => {
  return (
    <section className="uni-campus pt-80px pb-80px">
      <div className="container">
        <h4 className="fw-medium text-center mb-5px">Campus Life</h4>
        <p className="text-center mb-40px">
          Building a vibrant community of creative and accomplished people
        </p>
        <div className="row gy-30px">
            <div className="col-12 col-lg-9 mb-30px mb-lg-0">
                <div className="row">
                    {campusItems.map((item, index) => (
                        <div key={index} className="col-12 col-sm-6 col-md-6 col-lg-4 mt-3">
                        <div className="campus-items">
                            <a href={item.link}>
                            <Image
                                src={item.image}
                                alt={`Image of ${item.title}`}
                                width={300}
                                height={200}
                                style={{ width: '100%', height: 'auto' }}
                            />
                            </a>
                            <div className="campus-items-box pt-20px">
                            <h6 className="fw-bolder mb-5px">
                                <a href={item.link} className="transition-all">
                                {item.title}
                                </a>
                            </h6>
                            <p className="mb-10px">{item.description}</p>
                            <a
                                href={item.link}
                                className="fs-14 fw-medium transition-all text-uppercase text-biru"
                            >
                                Baca Selengkapnya
                            </a>
                            </div>
                        </div>
                        </div>
                    ))}
                </div>
            </div>
             <Aside/>

        </div>
      </div>
    </section>
  );
};

export default BeritaSection;
