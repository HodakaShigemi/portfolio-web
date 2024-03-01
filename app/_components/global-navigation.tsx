
type LinkProps = {
    href: string;
    children: React.ReactNode;
}

const Link = ({ href, children }: LinkProps) => (
    <a href={href} className="text-blue-500 hover:text-blue-700">
        {children}
    </a>
);

export default function GlobalNavigation() {
  return (
    <nav className="flex justify-center space-x-4">
      <Link href="/#top">Top</Link>
      <Link href="/#skill">Skill</Link>
      <Link href="/#projects">Projects</Link>
      <Link href="/#contact">Contact</Link>
    </nav>
  );
}

