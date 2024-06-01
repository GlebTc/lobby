import MenuSvg from '../MenuSvg';
import CalendarSvg from '../CalendarSvg';
import Link from 'next/link';

const LinksToronto = ({ componentName }: { componentName: string }) => {
  return (
    <div
      className={`${componentName}_LINKS_CONTAINER uppercase w-full flex flex-col text-center border-b-[1px] border-[var(--secondary-color)] mb-8`}
    >
      <Link
        href='/menus/toronto'
        className={`${componentName}_VIEW_MENU_CONTAINER border-t-[1px] border-[var(--secondary-color)] flex p-[10px] gap-8 text-gray-700 font-[500] text-[18px] items-center`}
        title='Lobby Bar Restaurant | Toronto | View Menu'
        aria-label='Lobby Bar Restaurant | Toronto | View Menu'
      >
        <MenuSvg />
        View Menu
      </Link>
      <Link
        href='/private-events/toronto'
        className={`${componentName}_BOOK_PRIVATE_EVENTS_CONTAINER border-t-[1px] border-[var(--secondary-color)] flex p-[10px] gap-8 text-gray-700 font-[500] text-[18px] items-center`}
        title='Lobby Bar Restaurant | Toronto | Book Private Event'
        aria-label='Lobby Bar Restaurant | Toronto | Book Private Event'
      >
        <CalendarSvg />
        Book Private Events
      </Link>
      <Link
        href='/'
        className={`${componentName}_EXPLORE_UPCOMING_EVENTS_CONTAINER border-t-[1px] border-[var(--secondary-color)] flex p-[10px] gap-8 text-gray-700 font-[500] text-[18px] items-center`}
        title='Lobby Bar Restaurant | Toronto | Book Private Event'
        aria-label='Lobby Bar Restaurant | Toronto | Book Private Event'
      >
        <CalendarSvg />
        Explore Upcoming Events
      </Link>
    </div>
  );
};

export default LinksToronto;
