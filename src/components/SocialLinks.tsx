export default function SocialLinks() {
  return (
      <nav className={"flex gap-4 justify-end p-4 h-fit text-zinc-400"}>
        <a
          datatype={"a-tag"}
          className={"interactable"}
          href={"https://github.com/DxVxDOD"}
        >
          <span>GitHub</span>
        </a>
        <a
          datatype={"a-tag"}
          className={"interactable"}
          href={"https://www.linkedin.com/in/david-orbang/"}
        >
          <span>LinkedIn</span>
        </a>
        <a
          datatype={"a-tag"}
          className={"interactable"}
          href={"https://twitter.com/OrbanDavid24"}
        >
          <span>Twitter</span>
        </a>
        <a
          datatype={"a-tag"}
          className={"interactable"}
          href={"https://my-blog-jtqt0npju-dxvxdod.vercel.app/"}
        >
          <span>Personal-Blog</span>
        </a>
      </nav>
  );
}
