
import { Layout } from "@/components/layout";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { useNavigate } from "react-router-dom";
import homebanner from '../assets/home-banner.png'
import cube from '../assets/cube.mp4'
import whychoose from '../assets/why-choose.png'
import ready from '../assets/ready.png'
import floor from '../assets/floor.jpg'
import { 
  LayoutGrid, 
  MonitorSmartphone, 
  Bus, 
  MonitorPlay, 
  Building, 
  Megaphone, 
  ArrowRight, 
  Check, 
  Users, 
  Award, 
  Target, 
  BarChart3 
} from "lucide-react";

const clientImages = Object.values(
  import.meta.glob('/src/assets/clients/*.png', { eager: true, import: 'default' })
);


const Index = () => {
  const navigate = useNavigate();


  return (
    <Layout>
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 overflow-hidden">
          {/* <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
          >
            <source src="https://videos.pexels.com/videos/digital-presentation-of-data-2099232" type="video/mp4" />
          </video> */}
          {/* <img src={homebanner}  alt="Banner"
  className="w-full  object-cover"/> */}
   <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src={cube} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/90 to-gray-900/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
              Benaka
           
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                {" "}Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              A leading and premium outdoor advertising agency in India, 
              specializing in Out of Home (OOH) and Digital Out of Home (DOOH) Advertising since 2008.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonGradient onClick={() => navigate("/about")} className="animate-fade-in">
                Learn More
              </ButtonGradient>
              <ButtonGradient variant="secondary" onClick={() => navigate("/contact")} className="animate-fade-in delay-100">
                Contact Us
              </ButtonGradient>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 right-0">
          <div className="flex justify-center">
            <a href="#vision" className="text-white animate-bounce">
              <ArrowRight size={24} className="transform rotate-90" />
            </a>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values Section */}
      <section id="vision" className="py-28 bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Vision */}
            <div className="backdrop-blur-lg bg-blue-600/10 p-8 rounded-2xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-blue-600/20 mr-4">
                  <Target className="text-blue-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">Vision</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our vision is to be the finest national advertising agency in India with our pre-dominant industry experience. 
                We strive to take our brand as wide as possible across the globe, servicing our clients on par with their expectations.
              </p>
            </div>
            
            {/* Mission */}
            <div className="backdrop-blur-lg bg-purple-600/10 p-8 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-purple-600/20 mr-4">
                  <Award className="text-purple-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">Mission</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Our mission is to provide creative, productive, and result-driven advertising and marketing solutions 
                which help brands to reach their target consumers on the go.
              </p>
            </div>
            
            {/* Values */}
            <div className="backdrop-blur-lg bg-indigo-600/10 p-8 rounded-2xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 transform hover:translate-y-[-5px]">
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-full bg-indigo-600/20 mr-4">
                  <Users className="text-indigo-400" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-white">Values</h2>
              </div>
              <p className="text-gray-300 leading-relaxed">
                BENAKA AUTOMATIONS is a leading and premium outdoor advertising agency in India, 
                peculiar in Out of Home (OOH) and Digital Out of Home (DOOH) Advertising. Our core services include 
                Hoarding, Billboard, Mall, On-Screen, 
                 Shelter, Transit, and IT Parks Advertising.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-800/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "13+", label: "Years of Experience" },
              { number: "100+", label: "Partner Cities" },
              { number: "100+", label: "Satisfied Clients" },
              { number: "1000+", label: "Successful Campaigns" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {stat.number}
                </div>
                <div className="mt-2 text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-48 h-48 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Our Services</h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              We offer a comprehensive range of outdoor advertising solutions to help your brand reach its target audience effectively.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MonitorPlay size={28} />,
                title: "LED Screens",
                description: "Digital displays for captive audience targeting including LED Mobile Vans",
                color: "from-blue-600/20 to-blue-800/20",
                borderColor: "border-blue-500/30",
                iconBg: "bg-blue-500/20",
                iconColor: "text-blue-400",
                
              },
              {
                icon: <Building size={28} />,
                title: "Hoardings & Billboards",
                description: "Large outdoor structures in high-traffic areas for maximum visibility",
                color: "from-purple-600/20 to-purple-800/20",
                borderColor: "border-purple-500/30",
                iconBg: "bg-purple-500/20",
                iconColor: "text-purple-400"
              },
              {
                icon: <LayoutGrid size={28} />,
                title: "Pole Kiosk & Center Median",
                description: "Strategic placements at key locations for enhanced brand exposure",
                color: "from-indigo-600/20 to-indigo-800/20",
                borderColor: "border-indigo-500/30",
                iconBg: "bg-indigo-500/20",
                iconColor: "text-indigo-400"
              },
              {
                icon: <MonitorSmartphone size={28} />,
                title: "Digital Marketing",
                description: "Comprehensive online advertising solutions across digital platforms",
                color: "from-green-600/20 to-green-800/20",
                borderColor: "border-green-500/30",
                iconBg: "bg-green-500/20",
                iconColor: "text-green-400"
              },
              {
                icon: <Bus size={28} />,
                title: "Bus Shelter & Transit Media",
                description: "Advertising at bus stops and on vehicles for mobile audience reach",
                color: "from-amber-600/20 to-amber-800/20",
                borderColor: "border-amber-500/30",
                iconBg: "bg-amber-500/20",
                iconColor: "text-amber-400"
              },
              {
                icon: <Megaphone size={28} />,
                title: "Gantry & Cantilever",
                description: "Prominent overhead structures spanning across roads for high impact",
                color: "from-rose-600/20 to-rose-800/20",
                borderColor: "border-rose-500/30",
                iconBg: "bg-rose-500/20",
                iconColor: "text-rose-400"
              },
            ].map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl bg-gradient-to-br ${service.color} backdrop-blur-md border ${service.borderColor} hover:border-opacity-50 transition-all duration-300 transform hover:translate-y-[-5px]`}
              >
                <div className={`p-4 rounded-xl ${service.iconBg} inline-block mb-4`}>
                  <div className={service.iconColor}>{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4">{service.description}</p>
                <a href="/services" className="flex items-center text-blue-400 hover:text-blue-300 transition-colors">
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Why Choose Us Section */}
     <section className="py-24 relative overflow-hidden bg-[url('./assets/floor.jpg')] bg-cover bg-center bg-no-repeat bg-gray-800/50">

        <div className="absolute inset-0 bg-black/70 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Why Choose Benaka Automation</h2>
              <p className="text-gray-300 mb-8">
                Since 2008, we've been revolutionizing outdoor advertising in India with our innovative approaches and commitment to excellence. 
                Our deep industry knowledge and extensive network enable us to create impactful campaigns that deliver results.
              </p>
              
              <div className="space-y-4">
                {[
                  "Extensive reach across major cities",
                  "Innovative advertising solutions",
                  "Data-driven campaign planning",
                  "Cost-effective advertising options",
                  "End-to-end project management",
                  "Proven track record of success"
                ].map((point, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="text-blue-400" size={18} />
                    </div>
                    <p className="ml-3 text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <ButtonGradient onClick={() => navigate("/about")}>
                  Learn More About Us
                </ButtonGradient>
              </div>
            </div>
            
            <div className="relative">
              <div className="p-2 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-2xl">
                <img 
                  src={whychoose} 
                  alt="Digital Advertising Display" 
                  className="rounded-xl w-full h-auto"
                />
              </div>
              
              {/* Floating stats */}
              <div className="absolute -bottom-6 -left-6 bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-700 flex items-center space-x-4 max-w-xs">
                <div className="p-3 bg-blue-500/20 rounded-full">
                  <Users className="text-blue-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Trusted by</div>
                  <div className="text-xl font-bold text-white">100+ Clients</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-gray-800 p-4 rounded-lg shadow-xl border border-gray-700 flex items-center space-x-4 max-w-xs">
                <div className="p-3 bg-purple-500/20 rounded-full">
                  <BarChart3 className="text-purple-400" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Industry Growth</div>
                  <div className="text-xl font-bold text-white">35% YOY</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
      </section>

      {/* Clients Section */}
      <section className="py-10 bg-gradient-to-r  from-gray-900 to-gray-800 relative">
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Clients</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
  {clientImages.map((imgSrc, index) => (
    <div
      key={index}
      className="h-20 flex items-center justify-center rounded-lg bg-gray-800/80 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105"
    >
      <img src={imgSrc} alt={`Client ${index + 1}`} className="max-h-12 object-contain" />
    </div>
  ))}
</div>

          
          <div className="text-center mt-12">
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join our growing list of satisfied clients who have successfully leveraged our outdoor advertising solutions to grow their brands.
            </p>
            <ButtonGradient variant="secondary" onClick={() => navigate("/projects")}>
              View Our Projects
            </ButtonGradient>
          </div>
        </div> */}
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Clients</h2>

      {/* Carousel container */}
      <div className="overflow-hidden relative">
        <div className="flex gap-16 animate-scroll whitespace-nowrap">
          {clientImages.concat(clientImages).map((imgSrc, index) => (
            <div key={index} className="flex-shrink-0 flex items-center justify-center h-20">
              <img
                src={imgSrc}
                alt={`Client ${index + 1}`}
                className="max-h-12  transition duration-300 brightness-300"
              />
            </div>
          ))}
        </div>
      </div>
      </div>
      </section>

      {/* CTA Section */}
      <section
  className="py-20 mt-16 relative overflow-hidden bg-cover bg-center"
style={{ backgroundImage: `url(${ready})`}}

>
    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/85 to-purple-900/75 "></div>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
    <h2 className="text-3xl font-bold mb-8 text-white">
      Ready to Elevate Your Brand Visibility?
    </h2>
    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
      Let's discuss how our innovative outdoor advertising solutions can help you reach your target audience effectively.
    </p>
    <ButtonGradient onClick={() => navigate("/contact")}>
      Get Started
    </ButtonGradient>
  </div>

  {/* Optional dark overlay for better contrast */}
  <div className="absolute inset-0 bg-black/40 z-0"></div>
</section>



    </Layout>
  );
};

export default Index;
