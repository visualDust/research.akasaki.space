import React, { useEffect, useLayoutEffect, useState } from "react";
import Button from '@mui/material/Button';
import Layout from "@theme/Layout";
import ProjectBadge from "../components/ProjectBadge";
import GitHubCalendar from 'react-github-calendar';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { AkasakFeaturesDesktop,AkasakFeaturesMobile } from "../components/AkasakFeatures";
import { inject } from '@vercel/analytics';
inject();

import useIsMobile from "../hooks/useIsMobile";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Zoom,
  EffectCreative,
} from "swiper";

SwiperCore.use([
  Zoom,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  EffectCreative,
]);

function ComponentPersonalInfo(): JSX.Element {
  return (
    <div // personal information
      style={{
        marginBottom: "25px",
        marginTop: "25px"
      }}
    >
      Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page Test Page
    </div>
  )
}

type LinkProps = {
  url: string;
  text: string;
  icon?: JSX.Element;
  alt?: string;
}

import { IoLogoGithub } from "react-icons/io5";
import { FaLink } from "react-icons/fa6";

const MyLinks: LinkProps[] = [
  {
    url: "https://github.com/visualDust",
    text: "GitHub",
    icon: (<IoLogoGithub />)
  },
  {
    url: "http://gavin.gong.host/about",
    text: "My friends",
    icon: (<FaLink />)
  }
]

function ComponentLinkMobile(): JSX.Element {
  return (
    <div>

    </div>
  )
}

function ComponentLinkDesktop(): JSX.Element {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {MyLinks.map((props, idx) => (
        <div style={{ textAlign: "center", margin: "5px" }}>
          <Button variant="outlined" href={props.url}>{props.icon}{props.text}</Button>
        </div>
      ))}
    </div>
  )
}

function ComponentLink(): JSX.Element {
  var isMobile = useIsMobile();
  return (
    <>
      <h3>Links</h3>
      {isMobile ? ComponentLinkMobile() : ComponentLinkDesktop()}
    </>
  )
}


function ComponentPersonalInfoAndLinksDesktop(): JSX.Element {
  return (
    <div // personal information and links
      style={{
        maxWidth: "1000px",
        display: "flex",
        flexDirection: "row",
        margin: "5%",
        alignItems: "stretch"
      }}>
      <div style={{ // picture and links
        display: "flex",
        flexDirection: "column",
        flex: "0 0 30%",
        marginRight: "5%"
      }}>
        <img
          style={{
            maxWidth: "250px"
          }}
          src="/img/VisualDust.jpg"></img>
        <h1 style={{
          marginTop: "25px"
        }}>Gavin Gong</h1>
        <div>
          <ComponentLink></ComponentLink>
        </div>
      </div>
      <div style={{ // personal information and github recent activities
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}>
        <ComponentPersonalInfo></ComponentPersonalInfo>
        <GitHubCalendar colorScheme="light" username="VisualDust" />
      </div>
    </div>
  )
}

function ComponentPersonalInfoAndLinksMobile(): JSX.Element {
  return (
    <div // personal information and links
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "5%"
      }}>
      <div style={{ // picture and links
        display: "flex",
        flexDirection: "column",
        flex: "0 0 30%",
        marginRight: "5%"
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <img
            style={{
              maxWidth: "150px"
            }}
            src="/img/VisualDust.jpg"></img>
          <h1 style={{
            marginTop: "25px"
          }}>Gavin Gong</h1>
        </div>
      </div>
      <ComponentPersonalInfo></ComponentPersonalInfo>
      <ComponentLink></ComponentLink>
      <GitHubCalendar style={{ marginTop: "10px", marginBottom: "10px" }} colorScheme="light" username="VisualDust" />
    </div>
  )
}

function HomePageMobile(): JSX.Element {
  return (
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch"
      }}
    >
      <ComponentPersonalInfoAndLinksMobile />
      <AkasakFeaturesMobile />
      <ProjectBadge></ProjectBadge>
    </div>
  )
}

function HomePageDesktop(): JSX.Element {

  return (
    <div
      style={{
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch"
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <ComponentPersonalInfoAndLinksDesktop />
      </div>
      <AkasakFeaturesDesktop />
      <ProjectBadge></ProjectBadge>
    </div>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const isMobile = useIsMobile();
  const [_, update] = useState(0);
  useLayoutEffect(() => {
    update(state => state + 1);
  }, []);
  console.info({ isTabletOrMobile: isMobile });
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Gavin Gong (aka VisualDust) and his coding life"
    >
      <main
        id="functionals"
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "calc(100vh - var(--ifm-navbar-height))",
          lineHeight: "1.5"
        }}
      >
        {isMobile ? HomePageMobile() : HomePageDesktop()}
      </main>
    </Layout>
  );
}