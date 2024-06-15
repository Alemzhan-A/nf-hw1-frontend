import fs from 'fs';
import path from 'path';
import Head from 'next/head';
import Link from 'next/link';

const generateSlug = title => title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

export async function getStaticPaths() {
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    const paths = jsonData.map(post => ({
        params: { slug: generateSlug(post.title) }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const filePath = path.join(process.cwd(), 'public', 'data.json');
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const post = jsonData.find(p => generateSlug(p.title) === params.slug);

    if (!post) {
        return { notFound: true };
    }

    return { props: { post } };
}

export default function PostPage({ post }) {
    return (
        <>
            <Head>
                <title>{post.title} | My Blog</title>
                <meta name="description" content={post.description} />
                <meta property="og:title" content={post.title} />
                <meta property="og:description" content={post.description} />
                <meta property="og:type" content="article" />
            </Head>
            <div className="container mx-auto px-4 py-8">
                <article className="bg-white rounded-lg shadow-lg p-6 md:p-12">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">{post.title}</h1>
                    <p className="text-gray-500">{post.description}</p>
                    <Link href="/blog" legacyBehavior>
                        <a className="mt-6 inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">Back to Blog</a>
                    </Link>
                </article>
            </div>
        </>
    );
}
