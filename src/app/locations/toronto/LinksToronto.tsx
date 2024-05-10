const LinksToronto = ({ componentName }: { componentName: string }) => {
  const linkContent = [
    {
      title: 'View Menu',
      className: 'VIEW_MENU_LINK_CONTAINER',
    },
    {
      title: 'Book Private Events',
      className: 'PRIVATE_EVENTS_LINK_CONTAINER',
    },
    {
      title: 'Explore Upcomming Events',
      className: 'UPCOMMING_EVENTS_LINK_CONTAINER',
    },
  ];
  return (
    <div
      className={`${componentName}_LINKS_CONTAINER uppercase w-full flex flex-col gap-4 text-center`}
    >
      {linkContent.map((content, index) => (
        <a
          href='/reservations'
          className={`${componentName}_${content.className} main_button`}
        >
          {content.title}
        </a>
      ))}
    </div>
  );
};

export default LinksToronto;
