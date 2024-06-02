import menuHamiltonBrunch from '@/src/util/menu/hamilton/brunch/menuHamiltonBrunch.json';
import MenuTorontoBrunchTower from '@/src/app/menus/toronto/(brunch)/MenuTorontoBrunchTower';
import MenuTorontoBrunchMenu from '@/src/app/menus/toronto/(brunch)/MenuTorontoBrunchMenu';
import MenuTorontoBrunchDrinks from '@/src/app/menus/toronto/(brunch)/MenuTorontoBrunchDrinks';
import localFont from 'next/font/local';

const GlacialIndifferenceRegular = localFont({
  src: '../../../../../public/fonts/static-fonts/GlacialIndifference-Regular.otf',
  display: 'swap',
})

const MenuTorontoBrunchMain = () => {
  const componentName = 'MENU_TORONTO_BRUNCH_MAIN';
  return (
    <div
      className={`${componentName}_MAIN_CONTAINER flex flex-col gap-4 pt-8 p-4`}
    >
      <div className='relative flex items-center mx-[40px]'>
        <div className='flex-grow border-t border-gray-300 border-1'></div>
        <h1 className={`text-[#c69a50] ${GlacialIndifferenceRegular.className} font-[400] tracking-tight text-[35px] mx-4`}>
          {menuHamiltonBrunch.title}
        </h1>
        <div className='flex-grow border-t border-gray-300 border-1'></div>
      </div>

      <div className={`${componentName}_BRUNCH_OPTIONS grid md:grid-cols-2`}>
        <MenuTorontoBrunchTower />
        <MenuTorontoBrunchMenu />
      </div>
      <MenuTorontoBrunchDrinks />
    </div>
  );
};

export default MenuTorontoBrunchMain;
