import { useAppearance } from "@/hooks/use-appearance";
import AppLogo from "./logo";
import { Link } from "react-router-dom";

export default function Header() {
    const { appearance, updateAppearance } = useAppearance()

    return (
        <header className='w-full [&>.link]:text-white shadow-md p-4 fixed [&>div]:max-w-7xl z-50 bg-base-200/65 backdrop-blur-md ' >
            <div className='mx-auto gap-5 flex justify-between items-center '>
                <AppLogo />
                <div className='flex gap-5'>
                    <div className='link link-animated hover:text-base-content'>Features</div>
                    <div className='link link-animated hover:text-base-content'>Documentation</div>
                    <div className='link link-animated hover:text-base-content'>Pricing</div>
                </div>
                <div className="flex gap-5 items-center">
                    <Link to={'/login'} className=' link link-animated hover:text-base-content'>Sign In</Link>
                    <div>
                        <button className='btn btn-primary'>Get Started Free</button>
                    </div>
                    <div className="dropdown relative inline-flex">
                        <button id="dropdown-default" type="button" className="dropdown-toggle btn btn-primary capitalize" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                            Theme {appearance}
                            <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
                        </button>
                        <ul className="dropdown-menu dropdown-open:opacity-100 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
                            <li onClick={() => updateAppearance('light')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>light</div></li>
                            <li onClick={() => updateAppearance('dark')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>dark</div></li>
                            <li onClick={() => updateAppearance('black')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>black</div></li>
                            <li onClick={() => updateAppearance('claude')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>claude</div></li>
                            <li onClick={() => updateAppearance('corporate')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>corporate</div></li>
                            <li onClick={() => updateAppearance('ghibli')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>ghibli</div></li>
                            <li onClick={() => updateAppearance('gourmet')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>gourmet</div></li>
                            <li onClick={() => updateAppearance('luxury')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>luxury</div></li>
                            <li onClick={() => updateAppearance('mintlify')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>mintlify</div></li>
                            <li onClick={() => updateAppearance('pastel')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>pastel</div></li>
                            <li onClick={() => updateAppearance('perplexity')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>perplexity</div></li>
                            <li onClick={() => updateAppearance('shadcn')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>shadcn</div></li>
                            <li onClick={() => updateAppearance('slack')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>slack</div></li>
                            <li onClick={() => updateAppearance('soft')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>soft</div></li>
                            <li onClick={() => updateAppearance('spotify')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>spotify</div></li>
                            <li onClick={() => updateAppearance('valorant')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>valorant</div></li>
                            <li onClick={() => updateAppearance('vscode')}><div className='link link-animated hover:text-base-content px-6 py-2 w-full capitalize'>vscode</div></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}