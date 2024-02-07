export default function About({ mobile }: { mobile: boolean }) {
  const text = mobile ? "text-xs" : "";

  return (
    <aside className={`${text}`}>
      A <b>Front-End Developer</b> who is passionate about web development and
      eager to tackle challenges. Specializing in <b>React</b> and{" "}
      <b>Typescript</b>, I am open to new technologies and aspire to become a{" "}
      <b>Full-Stack Developer</b>. I prioritize optimal coding practices and
      embrace diverse ideas to drive innovation and excellence in my career.
    </aside>
  );
}
