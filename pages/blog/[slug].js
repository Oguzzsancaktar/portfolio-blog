import fs from "fs";
import matter from "gray-matter";
import GSAP from "gsap";
import MarkdownIt from "markdown-it";
import normalizeWheel from "normalize-wheel";
import { useEffect, useRef, useState } from "react";

import Prism from "prismjs";
import "prismjs/themes/prism-funky.min.css";

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true,
  highlight: (str, lang) => {
    if (lang && Prism.languages[lang]) {
      try {
        return (
          '<pre class="language-' +
          lang +
          '"><code>' +
          Prism.highlight(str, Prism.languages[lang], lang) +
          "</code></pre>"
        );
      } catch (__) {}
    }

    return (
      '<pre class="language-' +
      lang +
      '"><code>' +
      md.utils.escapeHtml(str) +
      "</code></pre>"
    );
  },
});

export default function PostPage({ frontmatter, content }) {
  const pageRef = useRef(null);
  const [scroll, setScroll] = useState({
    current: 0,
    limit: 0,
  });

  useEffect(() => {
    const limit = pageRef.current.clientHeight - window.innerHeight;
    setScroll((prev) => {
      return {
        ...prev,
        limit,
      };
    });

    const listener = window.addEventListener("wheel", (event) => {
      const normalizedWheel = normalizeWheel(event);

      setScroll((prev) => {
        let current = prev.current + normalizedWheel.pixelY;

        // current will be 0 - limit
        // if current is less than 0, set it to 0
        // if current is greater than limit, set it to limit
        if (current < 0) {
          current = 0;
        } else if (current > limit) {
          current = limit;
        }

        return { ...prev, current };
      });
    });

    return () => {
      window.removeEventListener("wheel", listener);
    };
  }, [pageRef]);

  return (
    <div
      className="blog__content"
      ref={pageRef}
      style={{
        transform: `translateY(-${scroll.current}px)`,
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md.render(content) }} />
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("blogs");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`blogs/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
