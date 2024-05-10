const LinksHamilton = ({ componentName }: { componentName: string }) => {
  const linkContent = [
    {
      href: '/menus/hamilton',
      tag: 'View Menu',
      title: 'Lobby Bar Restaurant | Hamilton | View Menu',
      className: 'VIEW_MENU_LINK_CONTAINER',
    },
    {
      href: '/private-events/hamilton',
      tag: 'Book Private Events',
      title: 'Lobby Bar Restaurant | Hamilton | Book Private Event',
      className: 'PRIVATE_EVENTS_LINK_CONTAINER',
    },
    {
      href: '/',
      tag: 'Explore Upcomming Events',
      title: 'Lobby Bar Restaurant | Hamilton | Explore Upcomming Events',
      className: 'UPCOMMING_EVENTS_LINK_CONTAINER',
    },
  ];
  return (
    <div
      className={`${componentName}_LINKS_CONTAINER uppercase w-full flex flex-col gap-4 text-center`}
    >
      {linkContent.map((content, index) => (
        <a
          href={content.href}
          className={`${componentName}_${content.className} main_button`}
          title={content.title}
          aria-label={content.title}
        >
          {content.tag}
        </a>
      ))}
    </div>
  );
};

export default LinksHamilton;
