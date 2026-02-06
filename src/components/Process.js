import { steps } from '../data/siteData';

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Quy trình đặt hàng</h2>
          <p className="text-lg text-gray-600">Ba bước đơn giản để có túi như ý</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} data-aos="fade-up" data-aos-delay={index * 200} className="relative">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 text-center shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
                <div className="bg-gradient-to-r from-pink-400 to-purple-400 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg group-hover:scale-125 transition-transform duration-300">{step.number}</div>
                <div className="text-5xl mb-4 group-hover:scale-125 transition-transform duration-300">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-pink-300 text-3xl animate-pulse">→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
