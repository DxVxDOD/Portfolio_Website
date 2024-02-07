export const SocialLink = ({
  title,
  href,
}: {
  title: string;
  href: string;
}) => {
  return (
    <a type="a-tag" className={"interactable hover:text-[#f9f9f9]"} href={href}>
      {title}
    </a>
  );
};
