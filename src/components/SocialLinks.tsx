export default function SocialLinks() {
  return (
    <nav
      className={
        "flex justify-center text-xs p-2 gap-4 xl:justify-end xl:p-4 xl:h-fit text-[#939b9b] "
      }
    >
      <a
        datatype={"a-tag"}
        className={"interactable hover:text-[#f9f9f9]"}
        href={"https://github.com/DxVxDOD"}
      >
        <span>GitHub</span>
      </a>
      <a
        datatype={"a-tag"}
        className={"interactable hover:text-[#f9f9f9]"}
        href={"https://www.linkedin.com/in/david-orbang/"}
      >
        <span>LinkedIn</span>
      </a>
      <a
        datatype={"a-tag"}
        className={"interactable hover:text-[#f9f9f9]"}
        href={"https://twitter.com/OrbanDavid24"}
      >
        <span>Twitter</span>
      </a>
      <a
        datatype={"a-tag"}
        className={"interactable hover:text-[#f9f9f9]"}
        href={"https://my-blog-jtqt0npju-dxvxdod.vercel.app/"}
      >
        <span>Personal-Blog</span>
      </a>
    </nav>
  );
}
