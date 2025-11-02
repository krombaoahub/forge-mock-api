import { useAppearance } from "@/hooks/use-appearance"

export default function ThemeDropdown() {
    const { appearance, updateAppearance } = useAppearance()
    return (
        <div className="dropdown relative inline-flex">
            <button id="dropdown-default" type="button" className="dropdown-toggle link link-animated flex gap-2 items-center capitalize" aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                Theme {appearance}
                <span className="icon-[tabler--chevron-down] dropdown-open:rotate-180 size-4"></span>
            </button>
            <ul className="dropdown-menu dropdown-open:opacity-100 overflow-auto max-h-80 hidden min-w-60" role="menu" aria-orientation="vertical" aria-labelledby="dropdown-default">
                <li onClick={() => updateAppearance('light')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'light' ? 'btn btn-primary' : 'btn btn-outline'}`}>light</div></li>
                <li onClick={() => updateAppearance('dark')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'dark' ? 'btn btn-primary' : 'btn btn-outline'}`}>dark</div></li>
                <li onClick={() => updateAppearance('black')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'black' ? 'btn btn-primary' : 'btn btn-outline'}`}>black</div></li>
                <li onClick={() => updateAppearance('claude')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'claude' ? 'btn btn-primary' : 'btn btn-outline'}`}>claude</div></li>
                <li onClick={() => updateAppearance('corporate')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'corporate' ? 'btn btn-primary' : 'btn btn-outline'}`}>corporate</div></li>
                <li onClick={() => updateAppearance('ghibli')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'ghibli' ? 'btn btn-primary' : 'btn btn-outline'}`}>ghibli</div></li>
                <li onClick={() => updateAppearance('gourmet')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'gourmet' ? 'btn btn-primary' : 'btn btn-outline'}`}>gourmet</div></li>
                <li onClick={() => updateAppearance('luxury')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'luxury' ? 'btn btn-primary' : 'btn btn-outline'}`}>luxury</div></li>
                <li onClick={() => updateAppearance('mintlify')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'mintlify' ? 'btn btn-primary' : 'btn btn-outline'}`}>mintlify</div></li>
                <li onClick={() => updateAppearance('pastel')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'pastel' ? 'btn btn-primary' : 'btn btn-outline'}`}>pastel</div></li>
                <li onClick={() => updateAppearance('perplexity')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'perplexity' ? 'btn btn-primary' : 'btn btn-outline'}`}>perplexity</div></li>
                <li onClick={() => updateAppearance('shadcn')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'shadcn' ? 'btn btn-primary' : 'btn btn-outline'}`}>shadcn</div></li>
                <li onClick={() => updateAppearance('slack')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'slack' ? 'btn btn-primary' : 'btn btn-outline'}`}>slack</div></li>
                <li onClick={() => updateAppearance('soft')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'soft' ? 'btn btn-primary' : 'btn btn-outline'}`}>soft</div></li>
                <li onClick={() => updateAppearance('spotify')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'spotify' ? 'btn btn-primary' : 'btn btn-outline'}`}>spotify</div></li>
                <li onClick={() => updateAppearance('valorant')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'valorant' ? 'btn btn-primary' : 'btn btn-outline'}`}>valorant</div></li>
                <li onClick={() => updateAppearance('vscode')}><div className={`link link-animated hover:text-base-content px-6 py-2 w-full capitalize ${appearance === 'vscode' ? 'btn btn-primary' : 'btn btn-outline'}`}>vscode</div></li>
            </ul>
        </div>
    )
}