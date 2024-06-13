import { testimonials } from "../constants";
const Testimonial = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center my-10 lg:my-20">
        What people are saying
      </h2>
      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, i) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2" key={i}>
            <div className="bg-neutral-900 rounded-md border border-neutral-800 p-6 text-md font-thin">
              <p>{testimonial.text}</p>
              <div className="flex items-start mt-8">
                <img
                  className="w-12 h-12 mr-6 border border-neutral-300 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.user}
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-xs italic font-normal text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
