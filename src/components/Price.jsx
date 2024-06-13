import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
const Price = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-wider my-8">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-center items-center">
        {pricingOptions.map((item, i) => (
          <div key={i} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {item.title}
                {item.title === "Pro" && (
                  <span className="text-xl mb-4 ml-2 bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-4xl mt-6 mr-2">{item.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {item.features.map((feature, i) => (
                  <li key={i} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center text-center w-full items-center h-12 p-5 text-xl hover:bg-orange-900 transition duration-200  mt-20 tracking-tight border border-orange-900 rounded-md"
              >
                Subsribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Price;
