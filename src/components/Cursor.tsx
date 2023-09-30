export default function Cursor() {
  return (
    <svg
      id={"cursor"}
      className={"fixed z-40 left-0 top-0 pointer-events-none"}
      xmlns="http://www.w3.org/2000/svg"
      width="80"
      height="80"
      viewBox="0 0 1000 1000"
      fill="none"
    >
      <circle cx="420" cy="420" r="412.5" stroke="#A1A1AA" strokeWidth={"10"} />
      <circle cx="420" cy="420" r="131.5" stroke="#A1A1AA" strokeWidth={"10"} />
      <circle cx="420.5" cy="420.5" r="22.5" fill="#A1A1AA" />
    </svg>
  );
}
