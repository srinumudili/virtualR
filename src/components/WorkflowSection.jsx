import { CheckCircle2Icon } from "lucide-react";
import codeImg from "../assets/code.jpg";
import { checklistItems } from "../constants";
const WorkflowSection = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mt-6">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text tracking-wide">
          coding workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="lg:mt-8 p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="codeImg" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((checklistItem, i) => (
            <div key={i} className="flex mb-12">
              <div className="text-green-400 bg-neutral-900 mx-6 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2Icon />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-lg">{checklistItem.title}</h5>
                <p className="text-md text-neutral-500">
                  {checklistItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkflowSection;
