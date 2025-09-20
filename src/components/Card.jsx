// eslint-disable-next-line no-unused-vars
export default function Card({ icon: Icon, title, description, color }) {
  return (
    <div
      className="group relative rounded-xl bg-white cursor-pointer 
                 p-4 md:p-5 lg:p-6
                 transition-all duration-300 hover:scale-[1.02] hover:border-pink-500/50
                 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.5)]"
    >
      {/* for icons */}
      <div
        className={`inline-flex p-2 md:p-3 rounded-lg ${color} mb-3 md:mb-4`}
      >
        <Icon className="h-5 w-5 md:h-6 md:w-6" />
      </div>

      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">{title}</h3>
      <p className="text-gray-800 leading-relaxed text-sm md:text-base">
        {description}
      </p>
    </div>
  );
}
