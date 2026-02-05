import { features } from '../data/siteData';

export default function USP() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">Quality and care in every stitch</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-5xl sm:text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
