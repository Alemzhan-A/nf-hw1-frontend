import Link from 'next/link';
import fs from 'fs';
import path from 'path';

const generateSlug = title => title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'public', 'data.json');
  const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  const posts = jsonData.map(post => ({
    ...post,
    slug: generateSlug(post.title)
  }));

  return { props: { posts } };
}

export default function BlogIndex({ posts }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="font-bold text-xl mb-2 text-blue-800">{post.title}</h2>
              <p className="text-gray-700 text-base mb-4">
                {post.description.substring(0, 100)}...
              </p>
              <Link r href={`/blog/${post.slug}`} legacyBehavior>
                <a className="text-indigo-500 hover:text-indigo-600 transition duration-300 ease-in-out">Read more →</a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
