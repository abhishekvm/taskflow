'use client'
import {usePathname, useRouter, useSearchParams} from "next/navigation";


export default function Search({placeholder}: { placeholder: string }) {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const {replace} = useRouter()
    const handleSearch = (term: string) => {
        console.log(`Searching... ${term}`)
        const urlSearchParams = new URLSearchParams(searchParams)
        console.log(searchParams.get('q'))
        if (term) {
            urlSearchParams.set('q', term)
        } else {
            urlSearchParams.delete('q')
        }
        replace(`${pathname}?${urlSearchParams.toString()}`);
    }
    return (<input id="query" type="text" placeholder={placeholder} defaultValue={searchParams.get('q')?.toString()} onChange={e => {
            handleSearch(e.target.value)
        }}></input>)
}

