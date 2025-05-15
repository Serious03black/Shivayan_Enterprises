
import PageHeader from "@/components/shared/PageHeader";
import SEO from "@/components/shared/SEO";

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contact Us" 
        description="Get in touch with Shivayan Enterprises for your software development and IT consulting needs."
      />
      
      <PageHeader 
        title="Contact Us" 
        subtitle="We'd Love to Hear from You"
        backgroundImage="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact page content will go here</h2>
        </div>
      </div>
    </>
  );
};

export default Contact;
