import React from "react";
import Link from "next/link";
import Container from "../Container";

/**
 * Footer Component with minimal Sesame-style design
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-neutral-200">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 justify-between">
          <small className="text-sm font-medium">
            <Link href="/" className="hover:text-accent">
              Home
            </Link>{" "}
            &middot;{" "}
            <Link href="/research" className="hover:text-accent ml-2">
              Research
            </Link>{" "}
            &middot;{" "}
            <Link href="/team" className="hover:text-accent ml-2">
              Team
            </Link>{" "}
            &middot;{" "}
            <Link href="/contact" className="hover:text-accent ml-2">
              Contact us
            </Link>
          </small>

          <small className="text-sm font-medium">
            &copy; {currentYear} Sesame AI Inc.
          </small>

          <small className="text-sm font-medium">
            <Link href="/privacy" className="hover:text-accent">
              Privacy
            </Link>{" "}
            &middot;{" "}
            <Link href="/terms" className="hover:text-accent ml-2">
              Terms
            </Link>
          </small>
        </div>
      </Container>
    </footer>
  );
}
