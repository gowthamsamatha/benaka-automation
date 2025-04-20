
import { Layout } from "@/components/layout";
import { ButtonGradient } from "@/components/ui/button-gradient";
import { MapPin, Phone, Mail, Clock, Building, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-900/50 to-purple-900/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-white">
            Contact Us
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
            Get in touch with us to explore how we can help transform your advertising strategy.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gray-800/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-700 shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-white">Send us a message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
                    placeholder="How can we help you?"
                  />
                </div>
                <ButtonGradient type="submit" className="w-full">
                  Send Message
                </ButtonGradient>
              </form>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-900/80 to-purple-900/80 backdrop-blur-lg p-8 rounded-2xl text-white shadow-lg">
                <h2 className="text-2xl font-bold mb-8">Get in touch</h2>
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Building className="text-blue-400 mr-4" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Company</h3>
                      <p className="text-gray-300">BENAKA AUTOMATIONS PVT. LTD</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <MapPin className="text-blue-400 mr-4" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p className="text-gray-300">721/26, 3rd Floor, 38th Cross,</p>
                      <p className="text-gray-300">18th Main Jayanagar, 4th T Block,</p>
                      <p className="text-gray-300">Bangalore 560041</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Phone className="text-blue-400 mr-4" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-gray-300">97408 82799</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Mail className="text-blue-400 mr-4" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-gray-300">info@benakaautomation.com</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Clock className="text-blue-400 mr-4" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Business Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-300">Saturday: 9:00 AM - 1:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-8 rounded-2xl bg-gray-800/80 backdrop-blur-lg border border-gray-700 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-white">Our Location</h3>
                <div className="rounded-xl overflow-hidden h-64 bg-gray-700 flex items-center justify-center">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.944536570373!2d77.57943231482093!3d12.92485419088419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1513fa698785%3A0x1e1b1b4680ade0d1!2s4th%20T%20Block%2C%20Jayanagar%2C%20Bengaluru%2C%20Karnataka%20560041!5e0!3m2!1sen!2sin!4v1587374907290!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                    title="Benaka Automation Office Location"
                  ></iframe>
                </div>
                <div className="mt-6 flex justify-end">
                  <a 
                    href="https://goo.gl/maps/8t6kX7LBdGDyZFKu5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>View on Google Maps</span>
                    <ArrowRight size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "What areas do you serve in Bangalore?",
                answer: "We provide advertising services across all major areas in Bangalore as well as in other key cities throughout India."
              },
              {
                question: "How do I get started with outdoor advertising?",
                answer: "Contact our team through the form above or call us directly. We'll schedule a consultation to understand your needs and develop a tailored strategy."
              },
              {
                question: "What is the minimum contract duration?",
                answer: "Our contracts are flexible based on your campaign needs. We offer solutions ranging from short-term promotions to long-term brand building campaigns."
              },
              {
                question: "How do you measure the effectiveness of outdoor campaigns?",
                answer: "We use a combination of traffic data, audience analytics, and campaign-specific metrics to measure impact and provide detailed reports."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-gray-800/80 backdrop-blur-lg p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-gray-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
