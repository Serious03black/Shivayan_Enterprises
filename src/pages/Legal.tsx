
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";

const Legal = () => {
  return (
    <>
      <SEO 
        title="Legal Information" 
        description="Review Shivayan Enterprises' privacy policy, terms of service, and other legal information."
      />
      
      <PageHeader 
        title="Legal Information" 
        subtitle="Privacy Policy and Terms of Service"
        backgroundImage="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Legal page content will go here</h2>
        </div>
      </div>
    </>
  );
};

export default Legal;
