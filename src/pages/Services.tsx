
import { Layout } from "@/components/layout";
import { ButtonGradient } from "@/components/ui/button-gradient";
import aboutbanner from '../assets/aboutbanner.jpg'
import led from '../assets/led.jpg'
import hoarding from '../assets/hoarding.jpg'
import digital from '../assets/digital.jpg'
import busbrand from '../assets/busbrand.jpg'
import pole from '../assets/pole.jpg'
import gantry from '../assets/gantry.png'
import busshelter from '../assets/busshelter.jpeg' 

import { 
  MonitorPlay, 
  Building, 
  LayoutGrid, 
  MonitorSmartphone, 
  Bus, 
  Megaphone,
  CheckCircle,
  ArrowRight,
  Landmark,
  Warehouse,
  PanelTop
} from "lucide-react";

const Services = () => {
  return (
    <Layout>
    <section
  className="py-20  relative overflow-hidden bg-cover bg-center"
style={{ backgroundImage: `url(${aboutbanner})`}}

>
  <div className="absolute inset-0 bg-gradient-to-b from-blue-900/45 to-purple-900/50 "></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
            Our Services
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
              
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
              <img 
                src={led} 
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
                src={hoarding} 
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
            
            </div>
          </div>
        </div>
      </section>

      {/* Other Services Grid */}
      {/* <section className="py-20 bg-gray-900">
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
      </section> */}
  
<section className="py-16 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 order-2 lg:order-1">
        <div className="inline-block p-3 bg-green-500/20 rounded-xl">
          <Warehouse className="text-green-400" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-white">Bus Shelters</h2>
        <p className="text-lg text-gray-300">
          Bus shelters offer long exposure times to pedestrians and drivers. Being part of everyday commute routes, these ads are noticed repeatedly and influence brand recall.
        </p>
        <div className="space-y-4">
          <div className="flex items-start">
            <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
            <p className="ml-3 text-gray-300">Extended visibility for daily commuters</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
            <p className="ml-3 text-gray-300">Cost-effective for localized branding</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
            <p className="ml-3 text-gray-300">Ideal for FMCG and retail promotions</p>
          </div>
        </div>
       
      </div>
      <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl shadow-green-500/10">
        <img 
          src={busshelter}
          alt="Bus Shelter Advertising" 
          className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  </div>
</section>


<section className="py-16 bg-gray-800/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/10">
        <img 
          src={gantry}
          alt="Gantry Advertising" 
          className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="space-y-8">
        <div className="inline-block p-3 bg-yellow-500/20 rounded-xl">
          <Megaphone className="text-yellow-400" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-white">Gantry & Cantilever</h2>
        <p className="text-lg text-gray-300">
          Positioned above or across major roads, gantries and cantilever structures ensure unavoidable visibility for vehicular traffic, delivering high-impact advertising.
        </p>
        <div className="space-y-4">
          <div className="flex items-start">
            <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={18} />
            <p className="ml-3 text-gray-300">Unmissable roadside presence</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={18} />
            <p className="ml-3 text-gray-300">Covers wide traffic area efficiently</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={18} />
            <p className="ml-3 text-gray-300">Ideal for brand reinforcement and visibility</p>
          </div>
        </div>
        
      </div>
    </div>
  </div>
</section>

<section className="py-16 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 order-2 lg:order-1">
        <div className="inline-block p-3 bg-green-500/20 rounded-xl">
          <LayoutGrid className="text-green-400" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-white">Pole Kiosks and Centre Median</h2>
        <p className="text-lg text-gray-300">
          Pole kiosks and centre median ads capture the attention of pedestrians and motorists at eye level. Positioned on busy roads and junctions, these formats ensure repeated impressions throughout the day.
        </p>
        <div className="space-y-4">
          <div className="flex items-start">
            <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
            <p className="ml-3 text-gray-300">High-frequency visibility along traffic-heavy routes</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
            <p className="ml-3 text-gray-300">Perfect for city-level campaigns and public messaging</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
            <p className="ml-3 text-gray-300">Enhances brand recall through strategic placement</p>
          </div>
        </div>
        
      </div>
      <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl shadow-green-500/10">
        <img 
          src={pole}
          alt="Bus Shelter Advertising" 
          className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  </div>
</section>

<section className="py-16 bg-gray-800/50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/10">
        <img 
          src={busbrand}
          alt="Transit Media and Bus Branding" 
          className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="space-y-8">
        <div className="inline-block p-3 bg-yellow-500/20 rounded-xl">
          <Bus className="text-yellow-400" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-white">Transit Media and Bus Branding</h2>
        <p className="text-lg text-gray-300">
          Transit media and bus branding turn public transport hubs and vehicles into dynamic advertising platforms, delivering moving billboards and stationary displays across urban and suburban routes.
        </p>
        <div className="space-y-4">
          <div className="flex items-start">
            <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={18} />
            <p className="ml-3 text-gray-300">Covers both moving fleets (autos, cabs, buses, trains) and fixed placements (shelters, kiosks)</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={18} />
            <p className="ml-3 text-gray-300">High-impact visuals engage daily commuters and city dwellers</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-yellow-400 flex-shrink-0 mt-1" size={18} />
            <p className="ml-3 text-gray-300">Flexible for short-term promotions and long-term brand presence</p>
          </div>
        </div>
      
      </div>
    </div>
  </div>
</section>


<section className="py-16 bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="space-y-8 order-2 lg:order-1">
        <div className="inline-block p-3 bg-green-500/20 rounded-xl">
          <MonitorPlay className="text-green-400" size={32} />
        </div>
        <h2 className="text-3xl font-bold text-white">Digital Marketing</h2>
        <p className="text-lg text-gray-300">
          Digital marketing ensures an online presence across search engines, social media, and display networks. It’s data-driven, measurable, and highly customizable.
        </p>
        <div className="space-y-4">
          <div className="flex items-start">
            <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
            <p className="ml-3 text-gray-300">Targeted campaigns for maximum ROI</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
            <p className="ml-3 text-gray-300">Increases traffic and brand visibility online</p>
          </div>
          <div className="flex items-start">
            <CheckCircle className="text-green-400 flex-shrink-0 mt-1" size={18} />
            <p className="ml-3 text-gray-300">Ideal for businesses seeking digital-first growth</p>
          </div>
        </div>
       
      </div>
      <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl shadow-green-500/10">
        <img 
          src={digital}
          alt="Bus Shelter Advertising" 
          className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  </div>
</section>


    </Layout>
  );
};

export default Services;
