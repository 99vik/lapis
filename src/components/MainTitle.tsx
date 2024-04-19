export default function MainTitle({ title }: { title: string }) {
  return (
    <h1 className="text-4xl font-bold text-center text-white relative z-20">
      {title}
    </h1>
  );
}
