import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const { blogId } = useParams();

  return (
    <section className="bg-white py-20">
      <div className="max-w-3xl mx-auto px-6">

        <p className="text-sm uppercase tracking-widest text-slate-400 mb-4">
          Blog
        </p>

        <h1 className="text-3xl md:text-5xl font-black italic text-slate-900 mb-8">
          {blogId.replace(/-/g, " ")}
        </h1>

        <div className="space-y-6 text-slate-700 leading-relaxed">
          <p>
            This is a placeholder blog page. You can later fetch full
            blog content using the blogId from the URL.
          </p>

          <p>
            For now, this page exists to preview how the blog detail
            layout will look once real content is connected.
          </p>

          <p>
            You can design this page further with images, headings,
            quotes, and call-to-actions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
