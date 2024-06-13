import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function HeroFlats({
  title = "Click here to tweak this text however you want.",
  description = "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  image,
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  return (
    <div class="hero--container">
      <div class="hero--article">
        <ul class="panels">
          <li class="panel">
            <a href="#" class="hero--a">
              <span class="hero--span">Animals</span>
            </a>
            <img
              class="hero--img"
              src="https://assets.codepen.io/1149983/matthew-kerslake-BpH--upRlCs-unsplash-min.jpg"
              alt="image of lions"
            />
          </li>
          <li class="panel">
            <a href="#" class="hero--a">
              <span class="hero--span">History</span>
            </a>
            <img
              class="hero--img"
              src="https://assets.codepen.io/1149983/sub-buzz-24302-1484257459-8.jpg"
              alt="Marthin Luther King"
            />
          </li>
          <li class="panel">
            <a href="#" class="hero--a">
              <span class="hero--span">Science</span>
            </a>
            <img
              class="hero--img"
              src="https://assets.codepen.io/1149983/spacex-6SbFGnQTE8s-unsplash-min.jpg"
              alt="image of spaceship"
            />
          </li>
          <li class="panel">
            <a href="#" class="hero--a">
              <span class="hero--span">Travel</span>
            </a>
            <img
              class="hero--img"
              src="https://assets.codepen.io/1149983/ian-dooley-hpTH5b6mo2s-unsplash-min.jpg"
              alt="image of hot air balloons"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
