import { useEffect, useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient);

// Then we like to make a simple function like this that gives the
// builder an image and returns the builder for you to specify additional
// parameters:
function urlFor(source: any) {
  return builder.image(source);
}

interface CarouselProps {
  // images: ImageMetadata[];
  images: any[];
}

export default ({ images }: CarouselProps) => {
  let [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((currentIndex) => {
        return currentIndex + 1 < images.length ? currentIndex + 1 : 0;
      });
    }, 4000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <MotionConfig transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}>
      <div className="md:h-[500px] bg-black rounded-xl">
        <div className="mx-auto flex md:max-h-[500px] max-w-[100%] flex-col aspect-[3/2] rounded-xl">
          <div className="relative overflow-x-hidden">
            <motion.div animate={{ x: `-${index * 100}%` }} className="flex">
              {images.map((image) => {
                return (
                  <img
                    key={image._key}
                    src={urlFor(image).width(960).url()}
                    className="aspect-[3/2] object-cover rounded-xl"
                  />
                );
              })}
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
