import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import { useEffect, useContext } from "react";
import { photos } from "../data/photos";
import Image from "next/image";
import { motion } from "framer-motion";
import Script from "next/script";
import { THEME } from '../components/Theme'
import ThemeContext from '../components/ThemeContext';
export default function Home() {
  const store = useContext(ThemeContext)
  return (
    <>
      <Head>
        <title>Homepage</title>
      </Head>


      <Layout>
        <button
          onClick={() =>
            store.changeTheme(
              store.theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT
            )
          }
        >
          {store.theme === THEME.LIGHT ? 'dark' : 'light'}
        </button>
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
