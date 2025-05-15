
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";

const Blog = () => {
  return (
    <>
      <SEO 
        title="Blog & Resources" 
        description="Stay updated with the latest in technology, software development, and IT trends through our blog and resources."
      />
      
      <PageHeader 
        title="Blog & Resources" 
        subtitle="Insights, Articles, and Resources on Technology and Innovation"
        backgroundImage="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Blog page content will go here</h2>
        </div>
      </div>
    </>
  );
};

export default Blog;
