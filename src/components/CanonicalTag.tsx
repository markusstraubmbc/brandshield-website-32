import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://brandschutz-arnold.de";

const CanonicalTag = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", `${BASE_URL}${pathname}`);
  }, [pathname]);

  return null;
};

export default CanonicalTag;
