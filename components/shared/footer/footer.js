import Link from "next/link"

export default function Footer({ href, title }) {
    return(
        <div className="w-full text-xl max-w-6xl mx-auto py-2 px-4  mt-8">
            <Link href={href}>
                Go to {title} page
            </Link>
        </div>
    )
}