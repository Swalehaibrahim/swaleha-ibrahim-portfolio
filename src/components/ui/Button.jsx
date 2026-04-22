const variantClasses = {
  primary: 'button-primary',
  secondary: 'glass-panel text-ink hover:border-gold hover:text-gold',
  ghost: 'text-ink hover:text-gold',
};

function Button({
  children,
  className = '',
  disabled = false,
  href,
  onClick,
  target,
  rel,
  type = 'button',
  variant = 'primary',
}) {
  const sharedClassName = `inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.72rem] font-semibold uppercase tracking-[0.24em] transition duration-300 ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a
        className={sharedClassName}
        href={href}
        target={target}
        rel={rel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={sharedClassName}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
}

export default Button;
