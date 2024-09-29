export const ExternalLink = ({ children, href }) => (
  <a
    href={href}
    className="text-orange-600 font-medium underline-offset-2 underline hover:tracking-widest transition-all"
    rel="noopener noreferrer"
    target="_blank"
  >
    {children} &#10548;
  </a>
);

export const HomeHeroLink = ({ href, children }) => (
  <a
    href={`${href}?ref=pushkaryadav.in`}
    rel="noopener noreferrer"
    className="flex items-center gap-2 p-2 rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 text-gray-800 no-underline"
    target="_blank"
  >
    {children}
  </a>
);

export const SectionTitle = ({ children }) => (
  <h2 className="text-2xl font-bold text-gray-800 mb-4">{children}</h2>
);
