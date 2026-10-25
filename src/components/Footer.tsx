import { profile } from "@/data/profile";

const Footer = () => {
  return (
    <footer className="border-t border-border">
      <div className="page-wrap flex flex-col gap-2 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          {profile.name} · {profile.location}
        </p>
        <p>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
