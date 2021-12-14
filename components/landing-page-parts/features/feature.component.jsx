import Image from "next/image";
import { Reveal } from "react-awesome-reveal";

const Feature = ({ icon, title, text }) => {
  return (
    <Reveal triggerOnce delay={300}>
      <div className="border shadow rounded h-100 p-2">
        <div className="text-center">
          <Image
            src={icon}
            alt={`Picture of the ${title}`}
            placeholder="blur"
          />
        </div>
        <p className="lead">{title}</p>
        <p className="small text-muted">{text}</p>
      </div>
    </Reveal>
  );
};

export default Feature;
