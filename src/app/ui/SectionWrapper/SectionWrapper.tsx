type Props = {
  title: string;
  children: React.ReactNode;
};
export const SectionWrapperComponent = ({ title, children }: Props) => {
  return (
    <div className="w-full py-20 px-10">
      <section className="text-center text-3xl pb-12 font-medium">{title}</section>
      <section className="flex flex-row justify-between">{children}</section>
    </div>
  );
};
