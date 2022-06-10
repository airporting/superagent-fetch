module.exports = function (context) {
    context.toFetch = () => {
        const padLength = 4;

        const pad1 = ''.padStart(padLength, ' ');
        const pad2 = ''.padStart(padLength * 2, ' ');

        const parts = [
            `fetch("${context.url}", {`
        ];
        if (context._header && Object.keys(context._header).length) {
            parts.push(`${pad1}"headers": {\n${Object.entries(context._header)
                .map(([name, value]) => `${pad2}"${name}": "${value}"`)
                .join(',\n')}
${pad1}},`)
        }
        if (context._data) {
            parts.push(`${pad1}"body": "${JSON.stringify(context._data)}",`)
        }
        parts.push(`${pad1}"method": "${context.method}"`)
        parts.push(`});`)

        return parts.join(`\n`);
    }

    return context;
};

