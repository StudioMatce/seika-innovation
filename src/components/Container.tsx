// SEZIONE: Container — wrapper riutilizzabile max-width 1128px
// Perché: tutte le sezioni del sito usano lo stesso content width
// con padding laterale che si adatta al viewport

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-[1128px] px-[30px] sm:px-[61px] lg:px-0 ${className}`}>
      {children}
    </div>
  );
}
