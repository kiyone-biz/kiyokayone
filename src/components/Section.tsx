export default function Section({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  if (items.length === 0) return null;

  return (
    <>
      <h2 className='text-xl font-semibold mb-2 mt-6'>{title}</h2>
      <ul className='mb-4 list-disc list-inside'>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}
