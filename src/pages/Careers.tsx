
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";

const Careers = () => {
  return (
    <>
      <SEO 
        title="Careers" 
        description="Join the innovative team at Shivayan Enterprises. Explore our current job openings and company culture."
      />
      
      <PageHeader 
        title="Join Our Team" 
        subtitle="Explore Career Opportunities at Shivayan Enterprises"
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Careers page content will go here</h2>
        </div>
      </div>
    </>
  );
};

export default Careers;
