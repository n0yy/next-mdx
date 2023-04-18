import { ReactNode } from "react";
import Latex from "react-latex-next";
import "katex/dist/katex.min.css";

interface TypographyProps {
  children: ReactNode;
}

export default function Typography({ children }: TypographyProps) {
  return (
    <article className="prose prose-sky dark:prose-invert mx-auto mt-10 prose-img:rounded prose-img:shadow-lg prose-img:shadow-white/30 max-w-none w-[330px] md:w-[800px] overflow-hidden">
      {children}
    </article>
  );
}
