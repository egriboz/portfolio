import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import { useEffect } from "react";
import { photos } from "../data/photos";
import Image from "next/image";
import { motion } from "framer-motion";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>


      <Layout>
        <div className="grid grid-cols-4 gap-4">

          {photos.map((photo, indexOf) => (
            <Link
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
    </>
  );
}
