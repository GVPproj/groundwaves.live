import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import april202331 from "../assets/April2023-31.jpg";
import april202352 from "../assets/April2023-52.jpg";
import april202353 from "../assets/April2023-53.jpg";
import april202356 from "../assets/April2023-56.jpg";
import april202387 from "../assets/April2023-87.jpg";
import april202389 from "../assets/April2023-89.jpg";
import april202393 from "../assets/April2023-93.jpg";

let images = [
  april202393,
  april202331,
  april202352,
  april202353,
  april202356,
  april202387,
  april202389,
];

export default () => {
  let [index, setIndex] = useState(0);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="h-[500px] bg-black rounded-xl">
        <div className="mx-auto flex h-[500px] max-w-[85%] flex-col aspect-[3/2] rounded-xl">
          <div className="relative overflow-hidden">
            <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
              {images.map((image) => (
                <img
                  key={image.src}
                  src={image.src}
                  className="aspect-[3/2] object-cover rounded-xl"
                />
              ))}
            </motion.div>
            <AnimatePresence initial={false}>
              {index > 0 && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute left-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-skin-fill"
                  onClick={() => setIndex(index - 1)}
                >
                  <ChevronLeftIcon className="h-6 w-6 stroke-skin-highlight" />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence initial={false}>
              {index + 1 < images.length && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  whileHover={{ opacity: 1 }}
                  className="absolute right-2 top-1/2 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-skin-fill"
                  onClick={() => setIndex(index + 1)}
                >
                  <ChevronRightIcon className="h-6 w-6 stroke-skin-highlight" />
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </MotionConfig>
  );
};
