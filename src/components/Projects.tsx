import { SocialLink } from "./UI/SocialLink.tsx";

export default function Projects() {
  return (
    <nav
      className={
        "flex flex-col sm:p-4 items-start z-20 sm:justify-end sm:items-end"
      }
    >
      <h2 className={"text-xl text-[#939b9b] p-2"}>Projects:</h2>
      <SocialLink href="https://marks.onrender.com" title="Marks" />
      <SocialLink
        href="https://github.com/DxVxDOD/Data_table_display"
        title="Data display exercise"
      />
      <SocialLink
        href="https://inet-clone.vercel.app/"
        title="Inet Clone (In progress)"
      />
      <SocialLink
        href="https://github.com/DxVxDOD/Authentication_system"
        title="Auth System with JWT"
      />
    </nav>
  );
}
