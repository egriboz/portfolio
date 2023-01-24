import Link from "next/link";
import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { photos } from "../data/photos";
import Image from "next/image";
import { motion } from "framer-motion";
import Script from "next/script";
export default function Works() {
  const router = useRouter();
  // const { slug } = router.query;
  const { asPath } = router;

  console.log("asPathasPathasPath: ", asPath);

  useEffect(() => {
    const script = document.createElement('script');

    script.src = "external.js";
    script.async = true;
    script.type = "module";


    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [asPath]);



  return (

    <>
      <Head>
        <title>Works</title>
      </Head>
      {/* <Script
        type="module"
        src="external.js"
        
      /> */}
      {/* <Script type="module" strategy="lazyOnload" src="external.js" /> */}

      {/* <Script
        type="module"
        strategy="lazyOnload"
        src="external.js"
        onLoad={() => {
          console.log('Script has loaded..................')
        }}
      /> */}
      <Layout>
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


        <div className="columns" data-scroll-container="">
          <div className="column column-reverse">

            {photos.map((photo, indexOf) => (
              <figure className="column__item" key={photo.title}>
                <div className="column__item-imgwrap">
                  <Link
                    // href={`/works/${photo.id}`}
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
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          objectPosition: "center",
                        }}
                      />
                    </a>
                  </Link>
                </div>
              </figure>
            ))}





            {/* <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/1.04213a58.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Cyber Blue</span> <span>2011</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/2.3ff1fdb6.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Gnostic Will</span> <span>2012</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/3.b606be87.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>French Kiss</span> <span>2013</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/4.24fd614c.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Half Life</span> <span>2014</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/5.d13f5e61.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Love Boat</span> <span>2015</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/6.786c7db4.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Golden Ray</span> <span>2016</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/7.df95fe5c.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Blame Game</span> <span>2017</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/8.e7faf38e.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Lone Dust</span> <span>2018</span> </figcaption>
            </figure> */}

          </div>

          <div className="column">
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/9.ea63bab4.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Lucky Wood</span> <span>2019</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/10.57de09c7.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Good Earth</span> <span>2020</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/11.ba790930.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Empty Words</span> <span>2021</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/12.c3a8d893.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Nonage Line</span> <span>2009</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/13.3bd52250.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Blue Hell</span> <span>2010</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/14.b7263516.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Cold Blood</span> <span>2011</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/15.55bda21b.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Tulip Heat</span> <span>2012</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/16.eb88393b.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Red Wrath</span> <span>2013</span> </figcaption>
            </figure>
          </div>
          <div className="column column-reverse">
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/17.3450839a.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Bold Human</span> <span>2014</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/18.763d23f6.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Loyal Royal</span> <span>2015</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/19.be25549f.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Lone Cone</span> <span>2016</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/20.d7a9356b.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Dutch Green</span> <span>2017</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/21.4c8813a5.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Valley Hill</span> <span>2018</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/22.ec97ea6e.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Kale Hale</span> <span>2019</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/23.49e8893a.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Fake Cake</span> <span>2020</span> </figcaption>
            </figure>
            <figure className="column__item">
              <div className="column__item-imgwrap">
                <img src="https://tympanus.net/Development/ColumnScroll/24.057dafba.jpg" alt="title"

                />
              </div>
              <figcaption className="column__item-caption"> <span>Book Belly</span> <span>2021</span> </figcaption>
            </figure>




          </div>
        </div>

        <div className="warning">⚠️ Unfortunately your browser does not support CSS Scroll-Linked Animations, so this demo won-t work for you. If you-re feeling adventurous use Chromium 95+ with “Experimental Web Platform Features” enabled.</div>
        <div className="info">⚠️ Your browser does not support CSS Scroll-Linked Animations with <code>@scroll-timeline</code>. To make up for this, <a href="https://github.com/flackr/scroll-timeline" target="_top">a JavaScript polyfill</a> with some <abbr title="Web Animations API">WAAPI</abbr> code is used as a fallback.</div>
        <footer></footer>
      </Layout>
    </>
  );
}