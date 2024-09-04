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
            <meta name="naver-site-verification" content="5f4169cbe4d52118d83cdd80f1ca0040dfeebfa7"/>
            <meta name="google-site-verification" content="ReEm3Kd69Gl8zilBapxjmWTuEfgUQayoeYmC3QvGPOc"/>
        </>
    ),
    readMore: 'Read More →',
    postFooter: null,
    darkMode: true,
}
