import { forwardRef } from "react";

export const About = forwardRef<HTMLDivElement>((props, ref) => {
  return (
    <div className="bg-blue-400 h-200" ref={ref}>
      About Component
    </div>
  );
});
