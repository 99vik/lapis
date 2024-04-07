export default async function News() {
  const response = await fetch(`${process.env.CMS_URI}`, {
    cache: 'no-store',
    method: 'GET',
    headers: {
      authorization: `${process.env.API_KEY}`,
    },
  });
  const data = await response.json();
  console.log(data);

  return (
    <section className="">
      <p>news123</p>
    </section>
  );
}
