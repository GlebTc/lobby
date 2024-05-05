import HamiltonMenuHeader from "./HamiltonMenuHeader";

export default function menuLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={`relative`}>
    <HamiltonMenuHeader />
    {children}</div>;
}
