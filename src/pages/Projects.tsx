
import { Layout } from "@/components/layout";
import { ButtonGradient } from "@/components/ui/button-gradient";

const Projects = () => {
  const projects = [
    {
      title: "Digital Main Street Billboards",
      description: "India's first and largest network of main street DOOH billboards",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      category: "Digital Billboards",
    },
    {
      title: "Smart Bus Queue Shelters",
      description: "World's largest digital bus queue shelter network with integrated technologies",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      category: "Smart Transit",
    },
    {
      title: "E-Bike Advertising Network",
      description: "Innovative hybrid mobility solutions combining sustainability with advertising",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      category: "Mobility Solutions",
    },
    {
      title: "Smart Traffic Management",
      description: "Integrated traffic surveillance and advertising solutions",
      image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b",
      category: "Infrastructure",
    },
    {
      title: "Street Libraries",
      description: "Accessible public libraries with integrated digital displays",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363",
      category: "Urban Solutions",
    },
    {
      title: "Data Analytics Platform",
      description: "Advanced metrics and analytics for campaign optimization",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "Technology",
    },
  ];

  return (
    <Layout>
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Our Projects
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Discover our innovative solutions transforming urban spaces across India.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 mb-2">{project.category}</div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <ButtonGradient variant="secondary">Learn More</ButtonGradient>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your advertising strategy with our innovative solutions.
          </p>
          <ButtonGradient>Contact Us</ButtonGradient>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
