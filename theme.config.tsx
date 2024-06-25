export default {
    footer: <p>Copyright © 2024 <b>Minsung Sim</b> All rights Reserved.</p>,
    head: ({title, meta}) => (
        <>
            <title>{title}</title>
            {meta.description && (
                <meta name="description" content={meta.description}/>
            )}
            {meta.tag && <meta name="keywords" content={meta.tag}/>}
            {meta.author && <meta name="author" content={meta.author}/>}

        </>
    ),
    readMore: 'Read More →',
    postFooter: null,
    darkMode: true,
}