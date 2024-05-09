
const Links = ({componentName}:{componentName: string}) => {
  return (
    <div className={`${componentName}_LINKS_CONTAINER uppercase w-full`}>
    <div className={`${componentName}_VIEW_MENU_LINK_CONTAINER border-y-[1px]`}>
      View Menu
    </div>
    <div className={`${componentName}_PRIVATE_EVENTS_LINK_CONTAINER border-b-[1px]`}>
      Book Private Events
    </div>
    <div className={`${componentName}_UPCOMMING_EVENTS_LINK_CONTAINER border-b-[1px]`}>
      Explore Upcomming Events
    </div>
  </div>
  )
}

export default Links