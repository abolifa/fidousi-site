import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full h-[calc(100vh-80px)] flex items-center justify-center">
      <Loader className="animate-spin" size={30} />
    </div>
  );
};

export default Loading;
