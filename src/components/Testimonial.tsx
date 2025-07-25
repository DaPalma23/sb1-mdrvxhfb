import React from 'react';

interface TestimonialProps {
  name: string;
  location: string;
  quote: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, location, quote }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition duration-300">
      <div className="mb-6 flex justify-center">
        <svg className="h-10 w-10 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-gray-600 mb-6 italic text-center">{quote}</p>
      <div className="text-center">
        <p className="font-bold text-gray-800">{name}</p>
        <p className="text-gray-500 text-sm">{location}</p>
      </div>
    </div>
  );
};

export default Testimonial;