
import { Layout } from "@/components/layout";

const Awards = () => {
  return (
    <Layout>
      <section className="pt-20 pb-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
            Awards & Recognition
          </h1>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            Our commitment to excellence has been recognized across national and international platforms.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
            {[
              { count: "57", type: "Gold" },
              { count: "43", type: "Silver" },
              { count: "28", type: "Bronze" },
            ].map((award, index) => (
              <div key={index} className="p-8 rounded-2xl bg-white shadow-lg">
                <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  {award.count}
                </div>
                <div className="mt-2 text-xl text-gray-600">{award.type} Awards</div>
              </div>
            ))}
          </div>

          <div className="space-y-16">
            {[
              {
                name: "ABBYS",
                awards: [
                  "Best Digital Innovation 2024",
                  "Excellence in Outdoor Advertising 2023",
                  "Creative Campaign of the Year 2022",
                ],
              },
              {
                name: "EMVIES",
                awards: [
                  "Best Use of Technology 2024",
                  "Most Effective Campaign 2023",
                  "Innovation in Media 2022",
                ],
              },
              {
                name: "London Digital Signage Awards",
                awards: [
                  "Global Excellence Award 2024",
                  "Best Digital Billboard Campaign 2023",
                  "Innovation in DOOH 2022",
                ],
              },
              {
                name: "KYOORIUS",
                awards: [
                  "Design Excellence 2024",
                  "Best Urban Innovation 2023",
                  "Creative Impact Award 2022",
                ],
              },
            ].map((category, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white">
                <h3 className="text-2xl font-bold mb-6">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.awards.map((award, awardIndex) => (
                    <div
                      key={awardIndex}
                      className="p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <p className="text-gray-800">{award}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Awards;
