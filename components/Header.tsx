function Header() {
  return (
    <header className="flex p-5 sticky top-0 bg-white z-50 shadow-md justify-between items-center">
      <div className="flex space-x-2 items-center">
        <div>
          <h1 className="font-bold">
            <span className="text-violet-500">AI</span> 生成图片
          </h1>
        </div>
      </div>

    </header>
  );
}

export default Header;
