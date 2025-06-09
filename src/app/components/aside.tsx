import React from 'react';
import Image from 'next/image';

type Course = {
  title: string;
  image: string;
  price: string;
  link: string;
  isFree: boolean;
};

type Post = {
  title: string;
  image: string;
  date: string;
  link: string;
};

const popularCourses: Course[] = [
  {
    title: 'Create an LMS Website with LearnPress',
    image: '/images/courses/courses-01.png',
    price: 'Free',
    link: 'courses-details.html',
    isFree: true,
  },
  {
    title: 'Introduction LearnPress – LMS plugin',
    image: '/images/courses/courses-02.png',
    price: '$99',
    link: 'courses-details.html',
    isFree: false,
  },
  {
    title: 'How To Teach Online Courses Effectively',
    image: '/images/courses/courses-03.png',
    price: 'Free',
    link: 'courses-details.html',
    isFree: true,
  },
  {
    title: 'Introduction LearnPress – LMS plugin',
    image: '/images/courses/courses-04.png',
    price: 'Free',
    link: 'courses-details.html',
    isFree: true,
  },
];

const latestPosts: Post[] = [
  {
    title: 'LMS WordPress plugin',
    image: '/images/latest-new/latest-new-01.png',
    date: '20/08/2022',
    link: 'blog-details.html',
  },
  {
    title: 'Admin earns scholarship',
    image: '/images/latest-new/latest-new-02.png',
    date: '20/08/2022',
    link: 'blog-details.html',
  },
  {
    title: 'Forensic team earns several',
    image: '/images/latest-new/latest-new-03.png',
    date: '20/08/2022',
    link: 'blog-details.html',
  },
];

const Aside: React.FC = () => {
  return (
    <aside className="col-12 col-lg-3">
      <div className="blog-page__Aside">
        {/* Popular Courses */}
        <div className="blog-page__popular mb-30px">
          <h6 className="fs-18 text-uppercase fw-semibold mb-20px">Popular Courses</h6>
          {popularCourses.map((course, index) => (
            <div key={index} className="popular-courses d-flex gap-20px mb-20px">
              <div className="popular-courses_thumb">
                <a href={course.link}>
                  <Image src={course.image} alt={course.title} width={80} height={80} />
                </a>
              </div>
              <div className="popular-courses_content">
                <h6 className="fs-15 fw-semibold line-clamp-2 mb-10px">
                  <a href={course.link} className="transition-all fw-semibold">
                    {course.title}
                  </a>
                </h6>
                <p
                  className={`popular-courses_price fw-bolder ${
                    course.isFree ? 'free-status' : 'price-status'
                  }`}
                >
                  {course.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Latest Posts */}
        <div className="blog-page__latest mb-30px">
          <h6 className="fs-18 text-uppercase fw-semibold mb-20px">Latest Posts</h6>
          {latestPosts.map((post, index) => (
            <div key={index} className="latest-posts d-flex gap-20px mb-20px">
              <div className="latest-posts_thumb">
                <a href={post.link}>
                  <Image src={post.image} alt={post.title} width={80} height={80} />
                </a>
              </div>
              <div className="latest-posts_content">
                <h6 className="fs-15 fw-semibold line-clamp-2 mb-10px">
                  <a href={post.link} className="transition-all fw-semibold">
                    {post.title}
                  </a>
                </h6>
                <p className="latest-posts_date fs-13">{post.date}</p>
              </div>
            </div>
          ))}
        </div>
 
      </div>
    </aside>
  );
};

export default Aside;
