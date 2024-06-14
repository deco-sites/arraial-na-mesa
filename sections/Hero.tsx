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
          <li class="panel border-r-4 border-secondary">
            <a href="#" class="hero--a ">
              <span class="hero--span ">doces</span>
            </a>
            <img
              class="hero--img"
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10767/15c591de-8dcc-41d9-9495-a731d71ea528"
              alt="doces de festa junina"
            />
          </li>
          <li class="panel border-r-4 border-secondary">
            <a href="#" class="hero--a">
              <span class="hero--span">salgados</span>
            </a>
            <img
              class="hero--img"
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10767/e73261f2-87e4-4f6f-8560-d038970d0b2f"
              alt="salgados de festa junina"
            />
          </li>
          <li class="panel border-r-4 border-secondary">
            <a href="#" class="hero--a">
              <span class="hero--span">Bebidas</span>
            </a>
            <img
              class="hero--img"
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10767/fc16cb01-e492-4973-b081-df2052257818"
              alt="bebidas de festa junina"
            />
          </li>
          <li class="panel">
            <a href="#" class="hero--a">
              <span class="hero--span">DIY</span>
            </a>
            <img
              class="hero--img"
              src="https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/10767/eb6afeb6-fcbc-4f62-9be3-6f1182b3f837"
              alt="decoracao de festa junina"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
