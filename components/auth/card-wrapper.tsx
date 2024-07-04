import { Poppins } from "next/font/google";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
});

interface CardWrapperProps {
  label: string;
  subText?: string;
  children: React.ReactNode;
  backButtonLabel: string;
  backButtonLink: string;
  backButtonHref: string;
}

const CardWrapper = ({
  label,
  subText,
  backButtonHref,
  backButtonLabel,
  backButtonLink,
  children,
}: CardWrapperProps) => {
  return (
    <div>
      <header className={`text-center ${font.className}`}>
        <h1 className="mb-1 text-3xl font-semibold text-white">{label}</h1>
        <p className="text-white">{subText}</p>
      </header>
      <div>{children}</div>
      <footer className="w-full text-center">
        <p className="text-center text-sm text-white">
          {backButtonLabel}{" "}
          <Link
            href={backButtonHref}
            className="underline underline-offset-2 transition hover:opacity-80"
          >
            {backButtonLink}
          </Link>
        </p>
      </footer>
    </div>
  );
};

export default CardWrapper;
