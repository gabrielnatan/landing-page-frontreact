import { useTranslation } from "react-i18next"
import { Button } from "../Button"
import logo from "/src/assets/logo.png"
import { ButtonPopper } from "../I18n"

export const Navbar = ()=>{
  const { t } = useTranslation()

  return(
    <div className="flex-1 container flex items-center justify-center lg:justify-between">
      <div className="flex items-center">
        <img src={logo} className="w-14"/>
        <h1 className="text-xl font-extrabold text-purple-500">Front<span className="text-amber-500">React</span></h1>
      </div>
      <div className="fixed lg:relative top-0 left-0 h-screen lg:h-full w-screen lg:w-full bg-white lg:bg-transparent z-10 px-5  py-10 lg:p-0 translate-x-full lg:translate-x-0 flex flex-col lg:flex-row lg:justify-end lg:items-center">
        <nav className="flex flex-col lg:flex-row mb-5 lg:m-0 lg:mr-6 lg:items-center">
          <a className="py-2 px-5 rounded-md text-purple-500 hover:bg-purple-300/15 font-medium"  href="#">{t('navbar.one')}</a>
          <a className="py-2 px-5 rounded-md text-purple-500 hover:bg-purple-300/15 font-medium"href="#">{t('navbar.two')}</a>
          <a className="py-2 px-5 rounded-md text-purple-500 hover:bg-purple-300/15 font-medium"href="#">{t('navbar.three')}</a>
          <a className="py-2 px-5 rounded-md text-purple-500 hover:bg-purple-300/15 font-medium"href="#">{t('navbar.four')}</a>
          <ButtonPopper/>
        </nav>
        <Button>{t('navbar.button')}</Button>
      </div>
    </div>  
  )
}