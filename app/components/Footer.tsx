import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 text-center sm:flex-row sm:justify-between sm:text-left lg:px-8">
        <p className="text-xs text-muted-2">
          © {new Date().getFullYear()} {profile.name}. Built with Next.js &
          Tailwind.
        </p>
        <a
          href="#home"
          className="text-xs text-muted-2 transition-colors hover:text-cream"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
