
const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="flex-center z-[99999] h-screen w-full">
      <h1 className="text-gradient p-5 text-4xl">{message}</h1>
    </div>
  );
};

export default Loading;