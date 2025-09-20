import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function FeatureList({ title, description, items }) {
  return (
    <div className="space-y-6 lg:space-y-8">
      <div>
        <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 lg:mb-4">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
          {description}
        </p>
      </div>

      {/* List */}
      <div className="space-y-3 lg:space-y-4">
        {items.map((text, i) => (
          <div key={i} className="flex items-start space-x-3">
            <div className="w-5 h-5 rounded-full bg-purple-200 flex items-center justify-center mt-0.5 flex-shrink-0">
              <CheckCircleIcon className="w-3.5 h-3.5 text-purple-600" />
            </div>
            <p className="text-gray-600 text-sm lg:text-base">{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
