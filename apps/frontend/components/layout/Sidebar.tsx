const Sidebar = () => {
  return (
    <aside className='sticky left-0 h-screen max-w-[252px] overflow-y-auto bg-white px-[22px] pt-[32px]'>
      <img src='/images/Logo.png' alt='logo' className='mb-[60px]' />
      <div className='flex h-[44px] w-full   gap-[12px] rounded-[10px] bg-[#F5F5F7] px-[20px] py-[10px] text-secondary-default '>
        <img src='/icons/sidebar/category.png' alt='' />
        <p className='font-[600]'>Overview</p>
      </div>
    </aside>
  );
};

export default Sidebar;
