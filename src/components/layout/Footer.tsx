import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { footerNav, footerLegal } from "@/lib/nav";
import { site } from "@/lib/site";
import {
  LinkedInIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons/social";

const socialIcons = [
  { Icon: LinkedInIcon, href: site.social.linkedin, label: "LinkedIn" },
  { Icon: TwitterIcon, href: site.social.twitter, label: "Twitter" },
  { Icon: YoutubeIcon, href: site.social.youtube, label: "YouTube" },
];

export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="border-t border-(--color-border) bg-white"
    >
      <Container className="py-14">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10">
          <div className="sm:col-span-2 md:col-span-3 lg:col-span-2">
            <Logo />
            <p className="mt-4 text-sm text-(--color-muted) max-w-sm">
              Modern clinic operations on a single platform — built with care
              by a team of clinicians, designers, and engineers.
            </p>
            <div className="mt-5 flex gap-3">
              {socialIcons.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-(--color-border) text-(--color-muted) hover:text-(--color-brand-600) hover:border-(--color-brand-300) transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footerNav.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold">{c.title}</p>
              <ul className="mt-4 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-(--color-muted) hover:text-(--color-foreground)"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-(--color-border)">
          <p className="text-xs text-(--color-muted)">
            © {new Date().getFullYear()} {site.name} Technologies. All rights
            reserved.
          </p>
          <div className="flex gap-5 text-xs text-(--color-muted)">
            {footerLegal.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="hover:text-(--color-foreground)"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
