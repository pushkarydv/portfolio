export const BorderBox = ({ children, joinTop = false, joinBottom = false }) => {
  return (
    <div className='w-full'>
      <div
        className={`grid grid-cols-[1fr_8fr_1fr] md:grid-cols-[1fr_3fr_1fr] ${
          joinTop ? 'min-h-14' : 'min-h-28'
        }`}
      >
        <div className='border border-dashed border-t-0 border-r-0'></div>
        <div className='border border-dashed border-t-0'></div>
        <div className='border border-dashed border-t-0 border-l-0'></div>
      </div>
      <div className='grid grid-cols-[1fr_8fr_1fr] md:grid-cols-[1fr_3fr_1fr] min-h-48'>
        <div className='border border-dashed border-t-0 border-r-0'></div>
        <div className='border border-dashed border-t-0'>{children}</div>
        <div className='border border-dashed border-t-0 border-l-0'></div>
      </div>
      <div
        className={`grid grid-cols-[1fr_8fr_1fr] md:grid-cols-[1fr_3fr_1fr] ${
          joinBottom ? 'min-h-14' : 'min-h-28'
        }`}
      >
        <div className='border border-dashed border-t-0 border-b-0 border-r-0'></div>
        <div className='border border-dashed border-t-0 border-b-0'></div>
        <div className='border border-dashed border-t-0 border-b-0 border-l-0'></div>
      </div>
    </div>
  );
};