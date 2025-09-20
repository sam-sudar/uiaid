// eslint-disable-next-line no-unused-vars
export default function Card({ icon: Icon, title, description, color }) {
  return (
    <div
      className="group relative rounded-xl bg-white  p-6 
                 transition-all duration-300 hover:scale-[1.02] hover:border-pink-500/50 
                 hover:shadow-[0_0_30px_-5px_rgba(236,72,153,0.5)]"
    >
      {/* for icons  */}
      <div className={`inline-flex p-3 rounded-lg ${color} mb-4`}>
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold  mb-3">{title}</h3>
      <p className="text-gray-800 leading-relaxed">{description}</p>
    </div>
  );
}
