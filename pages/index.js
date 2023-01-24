import Link from "next/link";
import Layout from "../components/Layout";
import { photos } from "../data/photos";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-4 gap-4">
        {/* <div className="bg-gradient-to-tr from-purple-600 to-indigo-600 p-8 flex rounded-2xl items-center">
          <h1 className="font-extrabold text-3xl xl:text-5xl text-indigo-200 leading-tight">
            Page Transitions in{" "}
            <a href="https://nextjs.org" className="text-white">
              Next.js
            </a>{" "}
            with{" "}
            <a href="https://www.framer.com/motion/" className="text-white">
              Framer Motion
              <span className="text-purple-300">.</span>
              <span className="text-purple-300/70">.</span>
              <span className="text-purple-300/40">.</span>
              <span className="text-purple-300/10">.</span>
            </a>
          </h1>
        </div> */}

        {photos.map((photo, indexOf) => (
          <Link
            // href={`/works/${photo.id}`}
            scroll={false}
            key={photo.title}
            href={{
              pathname: `/works/${photo.slug}`,
              query: { indexOf: indexOf },
            }}
          >
            <a>
              <motion.img
                layoutId={`${photo.id}`}
                src={photo.src}
                alt={photo.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </a>
          </Link>
        ))}
      </div>

      <footer></footer>
    </Layout>
  );
}
