import Link from "next/link";
import Image from "next/image";
import { trackNavClick } from "@/scripts/analytics";

/**
 * Footer Component
 *
 * Implements requirements:
 * - Content & Copy Rules: Footer: © 2025 Sesame AI Inc. + Privacy | Terms
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (linkName: string, linkUrl: string) => {
    trackNavClick(linkName, linkUrl);
  };

  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and copyright */}
          <div className="md:col-span-4">
            <Link
              href="/"
              className="inline-block mb-6"
              onClick={() => handleLinkClick("Footer Logo", "/")}
            >
              <Image
                src="/images/logo-white.svg"
                alt="Sesame AI"
                width={130}
                height={35}
              />
            </Link>
            <p className="text-gray text-sm">
              &copy; {currentYear} Sesame AI Inc.
            </p>
          </div>

          {/* Navigation links */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/team"
                    className="text-gray hover:text-white transition-colors duration-200"
                    onClick={() => handleLinkClick("Footer - Team", "/team")}
                  >
                    Team
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.sesame.com/careers"
                    className="text-gray hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener"
                    onClick={() =>
                      handleLinkClick(
                        "Footer - Careers",
                        "https://www.sesame.com/careers"
                      )
                    }
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.sesame.com/contact"
                    className="text-gray hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener"
                    onClick={() =>
                      handleLinkClick(
                        "Footer - Contact",
                        "https://www.sesame.com/contact"
                      )
                    }
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.sesame.com/research"
                    className="text-gray hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener"
                    onClick={() =>
                      handleLinkClick(
                        "Footer - Research",
                        "https://www.sesame.com/research"
                      )
                    }
                  >
                    Research
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.sesame.com/blog"
                    className="text-gray hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener"
                    onClick={() =>
                      handleLinkClick(
                        "Footer - Blog",
                        "https://www.sesame.com/blog"
                      )
                    }
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.sesame.com/demo"
                    className="text-gray hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener"
                    onClick={() =>
                      handleLinkClick(
                        "Footer - Demo",
                        "https://www.sesame.com/demo"
                      )
                    }
                  >
                    Demo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="https://www.sesame.com/privacy"
                    className="text-gray hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener"
                    onClick={() =>
                      handleLinkClick(
                        "Footer - Privacy",
                        "https://www.sesame.com/privacy"
                      )
                    }
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.sesame.com/terms"
                    className="text-gray hover:text-white transition-colors duration-200"
                    target="_blank"
                    rel="noopener"
                    onClick={() =>
                      handleLinkClick(
                        "Footer - Terms",
                        "https://www.sesame.com/terms"
                      )
                    }
                  >
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social media links */}
        <div className="mt-12 pt-8 border-t border-gray/20 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-6 sm:mb-0">
            <Link
              href="https://twitter.com/sesameai"
              target="_blank"
              rel="noopener"
              className="text-gray hover:text-white transition-colors duration-200"
              aria-label="Twitter"
              onClick={() =>
                handleLinkClick(
                  "Footer - Twitter",
                  "https://twitter.com/sesameai"
                )
              }
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </Link>
            <Link
              href="https://linkedin.com/company/sesameai"
              target="_blank"
              rel="noopener"
              className="text-gray hover:text-white transition-colors duration-200"
              aria-label="LinkedIn"
              onClick={() =>
                handleLinkClick(
                  "Footer - LinkedIn",
                  "https://linkedin.com/company/sesameai"
                )
              }
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
            <Link
              href="https://github.com/sesameai"
              target="_blank"
              rel="noopener"
              className="text-gray hover:text-white transition-colors duration-200"
              aria-label="GitHub"
              onClick={() =>
                handleLinkClick(
                  "Footer - GitHub",
                  "https://github.com/sesameai"
                )
              }
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </Link>
          </div>

          <p className="text-gray text-sm">
            Designed and built with care in San Francisco
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
