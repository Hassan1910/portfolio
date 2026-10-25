import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6 text-foreground">
      <div className="max-w-md text-center">
        <p className="eyebrow">404</p>
        <h1 className="serif mt-3 text-4xl">Page not found</h1>
        <p className="mt-3 text-sm text-muted-foreground">That address is not on this site.</p>
        <a href="/" className="btn-primary mt-6">
          Back home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
