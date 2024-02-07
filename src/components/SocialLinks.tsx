import React from "react";
import { SocialLink } from "./UI/SocialLink.tsx";

export default function SocialLinks() {
  return (
    <nav
      className={
        "flex text-md gap-2 h-fit z-20 justify-center xl:gap-4 xl:justify-end xl:p-4 xl:h-fit text-[#939b9b] "
      }
    >
      <SocialLink title={"GitHub"} href={"https://github.com/DxVxDOD"} />
      <SocialLink
        title={"LinkedIn"}
        href={"https://www.linkedin.com/in/david-orbang/"}
      />
      <SocialLink title={"Twitter"} href={"https://twitter.com/OrbanDavid24"} />
      <SocialLink
        title={"Personal Blog"}
        href={"https://my-blog-jtqt0npju-dxvxdod.vercel.app/"}
      />
    </nav>
  );
}
