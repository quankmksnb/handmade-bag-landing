import { reviews } from '../data/siteData';

export default function Reviews() {
  if (!reviews || reviews.length === 0) {
    return (
      <section id="reviews" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Đánh giá khách hàng</h2>
          <p className="text-lg text-gray-600">Chưa có đánh giá nào — bạn có thể là người đầu tiên!</p>
        </div>
      </section>
    );
  }

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Đánh giá khách hàng</h2>
          <p className="text-lg text-gray-600">Những phản hồi từ khách hàng</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <div key={review.id} data-aos="fade-up" data-aos-delay={index * 100} className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="flex mb-4">{[...Array(5)].map((_, i) => (<span key={i} className={i < review.rating ? 'text-yellow-400 text-xl' : 'text-gray-300 text-xl'}>★</span>))}</div>
              <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-300 to-purple-300 flex items-center justify-center text-white font-bold">{review.name.charAt(0)}</div>
                <div className="font-semibold text-gray-900">{review.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
