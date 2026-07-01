import { Button } from "@heroui/react";

const Heropage = () => {
  return (
    <div className="flex justify-center min-h-[100vh] items-center ">
      <div>
        <h2 className="flex justify-center">Hero Page</h2>

        <div className="flex gap-4 my-5">
          <Button variant="outline">Button Outline</Button>
          <Button variant="secondary">Hero Secondary</Button>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
