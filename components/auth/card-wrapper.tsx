import Link from "next/link";

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
      <header className="text-center">
        <h1 className="text-3xl font-semibold text-white mb-1">{label}</h1>
        <p className="text-white">{subText}</p>
      </header>
      <div>{children}</div>
      <footer className="text-center w-full">
        <Link href={backButtonHref} className="text-center text-white text-sm">
          {backButtonLabel}{" "}
          <span className="underline underline-offset-2">{backButtonLink}</span>
        </Link>
      </footer>
    </div>
  );
};

export default CardWrapper;
