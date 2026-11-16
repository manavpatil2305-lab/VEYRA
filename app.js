export default function Home() {
  return (
    <div className="min-h-screen bg-[#111B21] text-[#E9EDEF] flex flex-col font-sans">
      
      {/* Top App Bar */}
      <header className="bg-[#202C33] p-4 flex justify-between items-center shadow-sm">
        <h1 className="text-xl font-semibold text-gray-200">veyra</h1>
        <div className="flex gap-5 text-gray-400 text-lg">
          <span>📷</span>
          <span>🔍</span>
          <span>⋮</span>
        </div>
      </header>

      {/* Chat List Area */}
      <main className="flex-1 overflow-y-auto">
        
        {/* Single Chat Row */}
        <div className="flex items-center gap-4 p-3 hover:bg-[#202C33] cursor-pointer">
          
          {/* Avatar */}
          <div className="w-12 h-12 bg-gray-600 rounded-full flex-shrink-0"></div>
          
          {/* Message Preview */}
          <div className="flex-1 border-b border-[#202C33] pb-3 pt-1">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-medium">Rahul Desai</h2>
              <span className="text-xs text-[#00A884]">10:45 AM</span>
            </div>
            <div className="flex justify-between items-center mt-1">
              <p className="text-sm text-gray-400 truncate w-4/5">Are we still on for the 5 PM meeting?</p>
              
              {/* Unread Badge */}
              <div className="w-5 h-5 bg-[#00A884] rounded-full flex items-center justify-center text-[10px] text-[#111B21] font-bold">
                2
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}
