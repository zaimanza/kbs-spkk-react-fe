

const fixedInputClass = "resize-none rounded-md appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-xl"

const TextArea = ({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired = false,
    placeholder,
    customClass
}) => {
    return (
        <div className="">
            <div className="pb-1">
                <label>
                    {labelText}
                </label>
            </div>
            <textarea
                onChange={handleChange}
                value={value}
                id={id}
                name={name}
                type={type}
                required={isRequired}
                className={fixedInputClass + customClass}
                placeholder={placeholder}
                rows={5}
                cols={5}
                wrap={"hard"}
            />
        </div>
    )
}

export default TextArea