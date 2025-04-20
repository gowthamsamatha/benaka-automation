
import { Layout } from "@/components/layout";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { 
  MonitorPlay, 
  Building, 
  LayoutGrid, 
  MonitorSmartphone, 
  Bus, 
  Megaphone,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Solutions = () => {
  return (
    <Layout>
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-900/50 to-purple-900/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Comprehensive outdoor advertising solutions to help your brand reach and engage with your target audience effectively.
          </p>
        </div>
      </section>

      {/* LED Screens Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 order-2 lg:order-1">
              <div className="inline-block p-3 bg-blue-500/20 rounded-xl">
                <MonitorPlay className="text-blue-400" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white">LED Screens & Mobile Vans</h2>
              <p className="text-lg text-gray-300">
                On-Screen Advertising includes static slides or digital commercials which usually begins from 15 to 30 minutes before the movie showtime. Digital ads allow for movement and animation, where an analog slide or still slides.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                  <p className="ml-3 text-gray-300">Cost-effective targeting of large demographics</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                  <p className="ml-3 text-gray-300">Excellent for reaching captive audiences</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                  <p className="ml-3 text-gray-300">Dynamic content with movement and animation</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                  <p className="ml-3 text-gray-300">Ideal for local and regional advertising</p>
                </div>
              </div>
              <ButtonGradient>Request a Quote</ButtonGradient>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                alt="LED Screen Advertising" 
                className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hoardings Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10">
              <img 
                src="https://images.unsplash.com/photo-1493397212122-2b85dda8106b" 
                alt="Billboard Advertising" 
                className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-8">
              <div className="inline-block p-3 bg-purple-500/20 rounded-xl">
                <Building className="text-purple-400" size={32} />
              </div>
              <h2 className="text-3xl font-bold text-white">Hoardings & Billboards</h2>
              <p className="text-lg text-gray-300">
                Hoarding is a large outdoor advertising structure, typically found in high traffic areas such as alongside busy roads. Hoardings are one of the few media left which can dominate the mind of a human being by sheer size alone also influence the consumer decision largely.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={18} />
                  <p className="ml-3 text-gray-300">High visibility in premium locations</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={18} />
                  <p className="ml-3 text-gray-300">Reach people of all demographics</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={18} />
                  <p className="ml-3 text-gray-300">Generate qualified leads for immediate conversion</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-purple-400 flex-shrink-0 mt-1" size={18} />
                  <p className="ml-3 text-gray-300">Dominate visual landscape with impactful size</p>
                </div>
              </div>
              <ButtonGradient>Request a Quote</ButtonGradient>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Grid */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Comprehensive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <LayoutGrid size={28} />,
                title: "Pole Kiosk & Center Median",
                description: "CENTER Median/POLE KIOSK advertising is strategically positioned in high-traffic areas to capture the attention of a large and diverse audience.",
                features: [
                  "Strategic high-traffic placement",
                  "High visibility displays",
                  "Targeted local advertising",
                  "Cost-effective solutions",
                ],
                color: "bg-indigo-500/20",
                textColor: "text-indigo-400"
              },
              {
                icon: <MonitorSmartphone size={28} />,
                title: "Digital Marketing",
                description: "Digital advertising refers to marketing through online channels, helping you achieve business goals ranging from brand awareness to customer engagement.",
                features: [
                  "Cross-platform campaigns",
                  "Data-driven targeting",
                  "Performance analytics",
                  "Measurable ROI",
                ],
                color: "bg-green-500/20",
                textColor: "text-green-400"
              },
              {
                icon: <Bus size={28} />,
                title: "Bus Shelter Advertising",
                description: "Bus stop advertising ensures your ad gains excellent exposure to pedestrian and vehicular traffic in busy urban areas.",
                features: [
                  "High urban visibility",
                  "Cost-effective solutions",
                  "Targeted metropolitan areas",
                  "Multiple display options",
                ],
                color: "bg-amber-500/20",
                textColor: "text-amber-400"
              },
              {
                icon: <Megaphone size={28} />,
                title: "Gantry & Cantilever",
                description: "Gantry advertising involves large, eye-catching structures spanning over roads or highways for prominent visibility to passing traffic.",
                features: [
                  "Dominant visibility",
                  "Premium highway locations",
                  "High impact messaging",
                  "Broad audience reach",
                ],
                color: "bg-rose-500/20",
                textColor: "text-rose-400"
              },
              {
                icon: <Bus size={28} />,
                title: "Transit Media",
                description: "Bus branding is an effective strategy for raising brand recognition and recall as buses drive through major streets and districts.",
                features: [
                  "Mobile visibility across cities",
                  "Extensive daily impressions",
                  "Cost-effective campaigns",
                  "Targeted route selection",
                ],
                color: "bg-blue-500/20",
                textColor: "text-blue-400"
              },
              {
                icon: <MonitorPlay size={28} />,
                title: "Custom Solutions",
                description: "We offer tailored advertising solutions based on your specific marketing objectives, target audience, and budget constraints.",
                features: [
                  "Personalized strategy",
                  "Integrated campaigns",
                  "Budget optimization",
                  "Campaign performance tracking",
                ],
                color: "bg-purple-500/20",
                textColor: "text-purple-400"
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 hover:border-gray-600 transition-all duration-300"
              >
                <div className={`p-4 rounded-xl ${service.color} inline-block mb-4`}>
                  <div className={service.textColor}>{service.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      <CheckCircle className={`${service.textColor} mr-2`} size={16} />
                      <p className="text-gray-300 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
                <a href="#" className={`flex items-center ${service.textColor} hover:opacity-80 transition-opacity`}>
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900/80 to-purple-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">Ready to Transform Your Advertising Strategy?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative solutions can help you reach your target audience effectively.
            </p>
            <ButtonGradient onClick={() => window.location.href = "/contact"}>Contact Us Today</ButtonGradient>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
