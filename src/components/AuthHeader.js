

export default function AuthHeader({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {
    return (
        <div className="mb-10">
            <div className="flex justify-center">
                <img
                    alt="logo"
                    className="h-64 w-64"
                    src="/logo_black.png" />
            </div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
        </div>
    )
}