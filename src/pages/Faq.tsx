
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";

const Faq = () => {
  return (
    <>
      <SEO 
        title="FAQ" 
        description="Find answers to frequently asked questions about Shivayan Enterprises' services, processes, and technologies."
      />
      
      <PageHeader 
        title="Frequently Asked Questions" 
        subtitle="Find Answers to Common Questions About Our Services"
        backgroundImage="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80"
      />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">FAQ page content will go here</h2>
        </div>
      </div>
    </>
  );
};

export default Faq;
