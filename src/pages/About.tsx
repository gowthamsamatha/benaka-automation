
import { Layout } from "@/components/layout";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { 
  Target, 
  Award, 
  Users, 
  Lightbulb, 
  CheckCircle, 
  Building, 
  BadgeCheck, 
  Globe
} from "lucide-react";

const About = () => {
  return (
    <Layout>
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-900/50 to-purple-900/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
            About Benaka Automation
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            A force in the digital out of home (DOOH) advertising domain, consistently delivering impressive returns in the global media landscape.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Broadcasting Brand Visibility Since 2008</h2>
              <p className="text-gray-300">
                We are an advertising agency in India broadcasting brand visibility since 2008. Our service empowers the brands to steer the complex of out of home advertising. We are expertise in Hoarding Advertising, Mall Advertising, On-Screen Auvertising, Bus Shelter Advertising, Transit Advertising, IT Parks Advertising. 
              </p>
              <p className="text-gray-300">
                Over the past 13+ years, we have seen immense growth in outdoor advertising and have built partnerships with 100+ clients. With our own media assets and strong dedicated workforce, we are delivering strong and cost-effective OOH campaigns for our clients.
              </p>
              <ButtonGradient>Learn More</ButtonGradient>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-400">13+</div>
                  <div className="text-gray-300 mt-2">Years of Excellence</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <div className="text-3xl font-bold text-purple-400">100+</div>
                  <div className="text-gray-300 mt-2">Partner Clients</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <div className="text-3xl font-bold text-blue-400">35%</div>
                  <div className="text-gray-300 mt-2">YOY Growth</div>
                </div>
                <div className="text-center p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300">
                  <div className="text-3xl font-bold text-purple-400">1000+</div>
                  <div className="text-gray-300 mt-2">Successful Campaigns</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-800/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-16 text-white">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Target size={36} />,
                title: "Vision",
                description: "Our vision is to be the finest national advertising agency in India with our pre-dominant industry experience. We strive to take our brand as wide as possible across the globe, servicing our clients on par with their expectations.",
                color: "bg-blue-500/20",
                textColor: "text-blue-400"
              },
              {
                icon: <Award size={36} />,
                title: "Mission",
                description: "Our mission is to provide the creative, productive, and result-driven advertising and marketing solutions which helps the brands to reach their target consumers on the go.",
                color: "bg-purple-500/20",
                textColor: "text-purple-400"
              },
              {
                icon: <BadgeCheck size={36} />,
                title: "Values",
                description: "BENAKA AUTOMATIONS is a leading and the premium outdoor advertising agency in India, peculiar in Out of Home (OOH) and Digital Out of Home (DOOH) Advertising with a commitment to excellence and client satisfaction.",
                color: "bg-indigo-500/20",
                textColor: "text-indigo-400"
              },
            ].map((value, index) => (
              <div key={index} className="bg-gray-800/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-700 hover:border-gray-600 transition-all duration-300">
                <div className={`p-4 rounded-xl ${value.color} inline-block mb-6 ${value.textColor}`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold text-white mb-6">The Power of Outdoor Advertising</h3>
              <p className="text-gray-300 mb-6">
                Outdoor advertising refers to methods of advertising that are designed to reach consumers when they are out of their homes. Since consumers spend more time out of their homes then in them, outdoor advertising is highly effective.
              </p>
              <p className="text-gray-300 mb-6">
                Businesses use this type of marketing platform to build brand awareness, boost visibility, and increase their overall success. The benefits of Outdoor advertising are, they are highly impactful, attention grabbing, high reach, cost effective and are engaging.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                  <span className="ml-3 text-gray-300">High Impact Visibility</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                  <span className="ml-3 text-gray-300">Attention Grabbing</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                  <span className="ml-3 text-gray-300">Maximum Reach</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                  <span className="ml-3 text-gray-300">Cost Effectiveness</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                  <span className="ml-3 text-gray-300">Engaging Content</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="text-blue-400 flex-shrink-0 mt-1" size={18} />
                  <span className="ml-3 text-gray-300">Brand Awareness</span>
                </div>
              </div>
              <ButtonGradient>Explore Our Solutions</ButtonGradient>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                alt="Digital Outdoor Advertising" 
                className="w-full h-auto object-cover rounded-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {[
                {
                  year: "2008",
                  title: "Company Founded",
                  description: "BENAKA AUTOMATIONS were founded in BANGALORE with a small team of OOH Advertising professionals.",
                  icon: <Building size={24} />,
                  color: "bg-blue-500/20",
                  textColor: "text-blue-400"
                },
                {
                  year: "2012",
                  title: "Rapid Growth",
                  description: "Experienced rapid growth and became one of the Best Outdoor Advertising Agencies in India.",
                  icon: <Lightbulb size={24} />,
                  color: "bg-purple-500/20",
                  textColor: "text-purple-400"
                },
                {
                  year: "2016",
                  title: "Expanding Partnerships",
                  description: "Built strong partnerships with over 100 clients across multiple industries.",
                  icon: <Users size={24} />,
                  color: "bg-indigo-500/20",
                  textColor: "text-indigo-400"
                },
                {
                  year: "2020",
                  title: "Digital Innovation",
                  description: "Expanded into digital out-of-home advertising solutions with cutting-edge technology.",
                  icon: <Globe size={24} />,
                  color: "bg-green-500/20",
                  textColor: "text-green-400"
                },
                {
                  year: "2023",
                  title: "Future Forward",
                  description: "Continuing to innovate and expand our reach across India with new advertising technologies.",
                  icon: <Target size={24} />,
                  color: "bg-amber-500/20",
                  textColor: "text-amber-400"
                },
              ].map((milestone, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-none">
                    <div className={`w-16 h-16 rounded-full ${milestone.color} flex items-center justify-center ${milestone.textColor}`}>
                      {milestone.icon}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-2">
                      <div className="text-xl font-bold text-white mr-3">{milestone.year}</div>
                      <div className="text-lg font-semibold text-blue-400">{milestone.title}</div>
                    </div>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-blue-900/80 to-purple-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Work with Us?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our outdoor advertising expertise can help your brand reach new heights.
          </p>
          <ButtonGradient onClick={() => window.location.href = "/contact"}>Contact Us Today</ButtonGradient>
        </div>
      </section>
    </Layout>
  );
};

export default About;
