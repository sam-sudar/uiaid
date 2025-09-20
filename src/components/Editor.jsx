import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  ListBulletIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";

function Editor() {
  return (
    <div className="bg-gradient-to-br from-pink-100 via-sky-100 to-blue-300 p-2 rounded-lg md:p-5">
      <div className="bg-white rounded-xl p-4 lg:p-6 shadow-sm border border-gray-200">
        <div className="flex items-center space-x-2 mb-4">
          <div className="flex space-x-1">
            <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-red-400"></div>
            <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 lg:w-3 lg:h-3 rounded-full bg-green-400"></div>
          </div>
        </div>

        <div className="flex items-center space-x-3 mb-4 text-gray-400">
          <BoldIcon className="w-4 h-4" />
          <ItalicIcon className="w-4 h-4" />
          <UnderlineIcon className="w-4 h-4" />
          <ListBulletIcon className="w-4 h-4" />
          <LinkIcon className="w-4 h-4" />
          <div className="flex-1"></div>
        </div>

        <div className="space-y-2 lg:space-y-3">
          <div className="h-2 lg:h-3 bg-gray-200 rounded w-3/4"></div>
          <div className="h-2 lg:h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-2 lg:h-3 bg-gray-200 rounded w-2/3"></div>
          <div className="h-2 lg:h-3 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    </div>
  );
}

export default Editor;
