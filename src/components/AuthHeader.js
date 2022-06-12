

export default function AuthHeader({
    heading,
    paragraph,
    linkName,
    linkUrl = "#"
}) {
    return (
        <div className="mb-10">
            <div className="flex justify-constain">
                <img
                    alt="logo"
                    className="object-contain "
                    src="/logo.png" />
            </div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900 ">
                {heading}
            </h2>
        </div>
    )
}