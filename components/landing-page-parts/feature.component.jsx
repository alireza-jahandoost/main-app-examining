import Image from "next/image";

const Feature = ({ icon, title, text }) => {
  return (
    <div className="border shadow rounded h-100 p-2">
      <div className="text-center">
        <Image src={icon} alt={`Picture of the ${title}`} placeholder="blur" />
      </div>
      <p className="lead">{title}</p>
      <p className="small text-muted">{text}</p>
    </div>
  );
};

export default Feature;
