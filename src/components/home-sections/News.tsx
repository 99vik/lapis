import { HoverEffect } from '../ui/card-hover-effect';

export default async function News() {
  const response = await fetch(`${process.env.CMS_URI}`, {
    cache: 'no-store',
    method: 'GET',
    headers: {
      authorization: `${process.env.API_KEY}`,
    },
  });
  const data = await response.json();
  console.log(data.docs);

  const projects = [
    {
      title: 'Stripe',
      description:
        'A technology company that builds economic infrastructure for the internet.',
      link: 'https://stripe.com',
    },
    {
      title: 'Netflix',
      description:
        'A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
      link: 'https://netflix.com',
    },
    {
      title: 'Google',
      description:
        'A multinational technology company that specializes in Internet-related services and products.',
      link: 'https://google.com',
    },
    {
      title: 'Meta',
      description:
        "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
      link: 'https://meta.com',
    },
    {
      title: 'Amazon',
      description:
        'A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.',
      link: 'https://amazon.com',
    },
    {
      title: 'Microsoft',
      description:
        'A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.',
      link: 'https://microsoft.com',
    },
  ];

  return (
    <section className="px-10 flex flex-col items-center py-6 bg-black mt-10 mb-16 border-t border-b">
      <h2 className="text-2xl ">Latest news</h2>
      <div className="h-[1px] my-2 bg-white/30 w-[930px]" />
      <HoverEffect items={projects} />
    </section>
  );
}
