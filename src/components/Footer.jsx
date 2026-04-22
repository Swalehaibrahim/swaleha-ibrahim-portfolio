import Container from './ui/Container';

function Footer({ links }) {
  return (
    <footer className="border-t border-line py-8">
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="font-heading text-3xl leading-none text-ink">Swaleha Ibrahim</p>
          <p className="mt-2 text-sm text-mist">
            Premium interiors with a modern, understated, luxury sensibility.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-mist">
          {links.map((link) => (
            <a
              className="transition hover:text-gold"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-mist">© Swaleha Ibrahim</p>
      </Container>
    </footer>
  );
}

export default Footer;
