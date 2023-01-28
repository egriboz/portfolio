import Link from "next/link";
import Head from "next/head";
// import { useEffect, useState } from "react";
import React, { useState, useContext, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { photos } from "../data/photos";
import Image from "next/image";
import { motion } from "framer-motion";
import Script from "next/script";
import { THEME } from '../components/Theme'
import ThemeContext from '../components/ThemeContext';

export default function Works() {

  const store = useContext(ThemeContext)
  const router = useRouter();
  // const { slug } = router.query;
  const { asPath } = router;
  // console.log("asPathasPathasPath: ", asPath);
  const [deltaY, setDeltaY] = useState(0);
  const [maxDelta, setMaxDelta] = useState(0);

  const scrollHandler = useCallback((event) => {
    setDeltaY(prevDeltaY => {
      let newDeltaY = prevDeltaY + event.deltaY;
      newDeltaY = Math.max(0, newDeltaY);
      newDeltaY = Math.min(maxDelta, newDeltaY);
      return newDeltaY;
    });
  }, [maxDelta]);

  // useEffect(() => {

  //   localStorage.setItem('SCROLL_POSITION', deltaY)
  //   console.log("SCROLL_POSITION, deltaY: ", deltaY)
  //   setTimeout(() => {

  //     const currentPosition = localStorage.getItem('SCROLL_POSITION')
  //     setDeltaY(currentPosition)
  //     console.log("currentPosition, deltaY: ", deltaY)
  //   }, 1000);
  // }, [deltaY, asPath]);



  useEffect(() => {
    // IE, Chrome, Safari, Opera
    window.addEventListener("wheel", scrollHandler);
    // Firefox
    window.addEventListener("DOMMouseScroll", scrollHandler);

    const containerContent = document.querySelector(".container-content");
    setMaxDelta(containerContent.offsetHeight - window.innerHeight);

    /* Buna artık gerek yok */
    /*
    const leftContainer = document.querySelector(".container-content.left");
    leftContainer.style.transform = `translateY(-${containerContent.offsetHeight}px)`;
    */
    // Clean up function

    return () => {
      window.removeEventListener("wheel", scrollHandler);
      window.removeEventListener("DOMMouseScroll", scrollHandler);
    };


  }, [scrollHandler]);


  return (

    <>
      <Head>
        <title>Works</title>
      </Head>

      <Layout>

        <MainItemsContainer deltaY={deltaY} maxDelta={maxDelta} />

        {/* <div className="grid grid-cols-4 gap-4">

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
      </div> */}

        <footer></footer>
      </Layout>
    </>
  );
}
const MainItemsContainer = ({ deltaY, maxDelta }) => {
  console.log("deltaY: ", deltaY, "maxDelta: ", maxDelta);
  let style_first = {
    transform: `translateY(-${maxDelta - deltaY}px)`
  };

  let style_second = {
    transform: `translateY(-${deltaY}px)`
  };

  const numbers = [];
  for (let i = 0; i < 30; i++) {
    numbers.push(i + 1);
  }

  return (
    <div className="main_items_container">
      <section className="main_items_container_child">
        <div className="container-content left" style={style_first}>

          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/9.ea63bab4.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/10.57de09c7.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/11.ba790930.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/12.c3a8d893.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/13.3bd52250.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/14.b7263516.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/15.55bda21b.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/16.eb88393b.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/17.3450839a.jpg" alt="title" />
            </picture>
          </div>

        </div>
      </section>
      <section className="main_items_container_child">
        <div className="container-content right" style={style_second}>

          {photos.map((photo, indexOf) => (
            <div className="container-content-block" key={photo.title}>
              <Link
                scroll={false}
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
                      opacity: "1 !important",
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />
                </a>
              </Link>
            </div>
          ))}

        </div>
      </section>
      <section className="main_items_container_child">
        <div className="container-content left" style={style_first}>

          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/9.ea63bab4.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/10.57de09c7.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/11.ba790930.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/12.c3a8d893.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/13.3bd52250.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/14.b7263516.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/15.55bda21b.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/16.eb88393b.jpg" alt="title" />
            </picture>
          </div>
          <div className="container-content-block">
            <picture>
              <img src="https://tympanus.net/Development/ColumnScroll/17.3450839a.jpg" alt="title" />
            </picture>
          </div>

        </div>
      </section>
    </div>
  );
};
// export async function getStaticProps() {
//   const data = await fetch('http://localhost:3000/photos.json')
//   const photos = await data.json()

//   return {
//     props: {
//       photos
//     }
//   }
// }