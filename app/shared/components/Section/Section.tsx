export function Section({ children, className}) {
    return <section className={'kto-layout-section' + ' ' + className}>
        {children}
    </section>
}